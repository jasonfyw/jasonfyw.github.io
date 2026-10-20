/*
Renders the animated ASCII art behind the hero. Frames are written straight
into two <pre> elements (a dim background field and the accent foreground
shape) so the animation never triggers React re-renders.
*/

export type AsciiShape = 'torus' | 'planet' | 'orbits' | 'jw'

interface AsciiEngineOptions {
    hero: HTMLElement
    probe: HTMLElement
    fg: HTMLElement
    bg: HTMLElement
    shape: AsciiShape
    speed: number
    animate: boolean
}

interface MaskRect {
    c0: number
    c1: number
    r0: number
    r1: number
}

interface FourierTerm {
    k: number
    amp: number
    ph: number
}

interface FourierData {
    N: number
    terms: FourierTerm[]
    px: number[]
    py: number[]
    pen: number[]
}

type Grid = string[]

const TAU = 6.2832

export class AsciiEngine {
    private opts: AsciiEngineOptions
    private W = 0
    private H = 0
    private ASP = 0.52
    private S = 0
    private cx = 0
    private cy = 0
    private t = 0
    private mx = 0
    private my = 0
    private tx = 0
    private ty = 0
    private fade = new Float32Array(0)
    private hard = new Uint8Array(0)
    private hash = new Float32Array(0)
    private fz: FourierData | null = null
    private reduced = false
    private dead = false
    private timer?: ReturnType<typeof setInterval>
    private settle?: ReturnType<typeof setTimeout>

    constructor(opts: AsciiEngineOptions) {
        this.opts = opts
    }

    start() {
        try {
            this.reduced = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
        } catch (e) {}
        window.addEventListener('resize', this.measure)
        document.fonts?.ready.then(() => {
            if (!this.dead) this.measure()
        })
        this.measure()
        this.settle = setTimeout(() => {
            if (!this.dead) this.measure()
        }, 400)
        this.timer = setInterval(() => {
            if (!this.opts.animate || this.reduced) return
            this.step()
        }, 42)
    }

    stop() {
        this.dead = true
        clearInterval(this.timer)
        clearTimeout(this.settle)
        window.removeEventListener('resize', this.measure)
    }

    // x and y are in [-1, 1] relative to the hero's centre
    setPointer(x: number, y: number) {
        this.mx = x
        this.my = y
    }

    private measure = () => {
        const { hero, probe } = this.opts
        const cw = probe.offsetWidth / 10 || 7.2
        const lh = probe.offsetHeight || 13.8
        const W = Math.max(24, Math.ceil(hero.clientWidth / cw))
        const H = Math.max(12, Math.ceil(hero.clientHeight / lh))
        const A = cw / lh
        this.W = W
        this.H = H
        this.ASP = A

        // Keep the art clear of the text laid over the hero
        const hr = hero.getBoundingClientRect()
        const rects: Record<string, MaskRect> = {}
        hero.querySelectorAll('[data-mask]').forEach(el => {
            const r = el.getBoundingClientRect()
            if (r.width === 0 || r.height === 0) return
            rects[el.getAttribute('data-mask') as string] = {
                c0: (r.left - hr.left) / cw,
                c1: (r.right - hr.left) / cw,
                r0: (r.top - hr.top) / lh,
                r1: (r.bottom - hr.top) / lh,
            }
        })
        const list = Object.values(rects)
        const n = W * H
        const fade = new Float32Array(n)
        const hard = new Uint8Array(n)
        const hash = new Float32Array(n)
        for (let r = 0; r < H; r++) {
            for (let c = 0; c < W; c++) {
                let f = 1
                let h = 0
                for (const q of list) {
                    const dx = Math.max(q.c0 - (c + 1), 0, c - q.c1)
                    const dy = Math.max(q.r0 - (r + 1), 0, r - q.r1) / A
                    const d = Math.max(dx, dy)
                    if (d < 1.5) h = 1
                    f = Math.min(f, Math.max(0, (d - 1) / 9))
                }
                const i = c + r * W
                fade[i] = f
                hard[i] = h
                const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453
                hash[i] = x - Math.floor(x)
            }
        }
        this.fade = fade
        this.hard = hard
        this.hash = hash

        const narrow = W < 100
        const S = narrow ? W * 0.36 : Math.min(W * 0.21, (H * 0.4) / A)
        let cx = W / 2
        const cy = narrow ? H * 0.34 : H / 2
        if (!narrow && rects.name)
            cx = Math.min(W - S - 3, Math.max(W / 2, rects.name.c1 + S + 8))
        this.S = S
        this.cx = cx
        this.cy = cy
        this.step(true)
    }

    private step(still = false) {
        if (!this.W) return
        if (!still) {
            this.t += 0.045 * this.opts.speed
            this.tx += (this.mx - this.tx) * 0.08
            this.ty += (this.my - this.ty) * 0.08
        }
        const n = this.W * this.H
        const fg: Grid = new Array(n).fill(' ')
        const shape = this.opts.shape
        if (shape === 'planet') this.planet(fg)
        else if (shape === 'orbits') this.orbits(fg)
        else if (shape === 'jw') this.fourier(fg)
        else this.torus(fg)
        for (let i = 0; i < n; i++) if (this.hard[i]) fg[i] = ' '
        const bg = this.field(fg)
        this.opts.fg.textContent = this.join(fg)
        this.opts.bg.textContent = this.join(bg)
    }

    private field(fg: Grid): Grid {
        const W = this.W
        const H = this.H
        const A = this.ASP
        const t = this.t
        const out: Grid = new Array(W * H)
        const ox = W / 2 + this.tx * W * 0.35
        const oy = (H / 2 + this.ty * H * 0.35) / A
        for (let r = 0; r < H; r++) {
            const y = r / A
            for (let c = 0; c < W; c++) {
                const i = c + r * W
                const f = this.fade[i]
                if (
                    f <= 0 ||
                    fg[i] !== ' ' ||
                    (c > 0 && fg[i - 1] !== ' ') ||
                    (c < W - 1 && fg[i + 1] !== ' ')
                ) {
                    out[i] = ' '
                    continue
                }
                const dx = c - ox
                const dy = y - oy
                const v =
                    Math.sin(c * 0.045 + t * 0.5) +
                    Math.sin(y * 0.05 - t * 0.6) +
                    Math.sin((c + y) * 0.028 + t * 0.3) +
                    Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.08 - t * 1.1)
                const s = (v + 4) * 1.6
                const band = Math.floor(s)
                let ch = ' '
                if (s - band < 0.15) ch = band % 3 === 0 ? ':' : '.'
                else if (this.hash[i] < 0.006) ch = '+'
                if (ch !== ' ' && this.hash[i] > f) ch = ' '
                out[i] = ch
            }
        }
        return out
    }

    private join(out: Grid) {
        const lines: string[] = []
        for (let r = 0; r < this.H; r++)
            lines.push(out.slice(r * this.W, (r + 1) * this.W).join(''))
        return lines.join('\n')
    }

    private put(
        out: Grid,
        x: number,
        y: number,
        ch: string,
        onlyBlank: boolean
    ) {
        const c = Math.floor(x)
        const r = Math.floor(y)
        if (c < 0 || c >= this.W || r < 0 || r >= this.H) return
        const i = c + r * this.W
        if (onlyBlank && out[i] !== ' ') return
        out[i] = ch
    }

    private line(
        out: Grid,
        x0: number,
        y0: number,
        x1: number,
        y1: number,
        ch: string | null,
        onlyBlank: boolean
    ) {
        const A = this.ASP
        const dx = x1 - x0
        const dy = y1 - y0
        const steps = Math.max(
            1,
            Math.ceil(Math.max(Math.abs(dx), Math.abs(dy)) * 1.2)
        )
        let c = ch
        if (!c) {
            const ang = Math.atan2(-dy / A, dx)
            const a = ((ang % Math.PI) + Math.PI) % Math.PI
            c =
                a < Math.PI / 8 || a > (7 * Math.PI) / 8
                    ? '-'
                    : a < (3 * Math.PI) / 8
                      ? '/'
                      : a < (5 * Math.PI) / 8
                        ? '|'
                        : '\\'
        }
        for (let s = 0; s <= steps; s++)
            this.put(
                out,
                x0 + (dx * s) / steps,
                y0 + (dy * s) / steps,
                c,
                onlyBlank
            )
    }

    private torus(out: Grid) {
        const W = this.W
        const H = this.H
        const ASP = this.ASP
        const S = this.S
        const zb = new Float32Array(W * H)
        const A = this.t + this.ty * 1.4
        const B = this.t * 0.5 + this.tx * 1.8
        const cA = Math.cos(A)
        const sA = Math.sin(A)
        const cB = Math.cos(B)
        const sB = Math.sin(B)
        const R1 = 1
        const R2 = 2
        const K2 = 5
        const K1 = (S * K2) / (R1 + R2)
        const ramp = '.,-~:;=!*#$@'
        const thStep = S > 30 ? 0.045 : 0.07
        const phStep = S > 30 ? 0.012 : 0.02
        for (let th = 0; th < TAU; th += thStep) {
            const ct = Math.cos(th)
            const st = Math.sin(th)
            for (let ph = 0; ph < TAU; ph += phStep) {
                const cp = Math.cos(ph)
                const sp = Math.sin(ph)
                const cx = R2 + R1 * ct
                const cy = R1 * st
                const x = cx * (cB * cp + sA * sB * sp) - cy * cA * sB
                const y = cx * (sB * cp - sA * cB * sp) + cy * cA * cB
                const z = K2 + cA * cx * sp + cy * sA
                const ooz = 1 / z
                const xp = Math.floor(this.cx + K1 * ooz * x)
                const yp = Math.floor(this.cy - K1 * ooz * y * ASP)
                if (xp < 0 || xp >= W || yp < 0 || yp >= H) continue
                const L =
                    cp * ct * sB -
                    cA * ct * sp -
                    sA * st +
                    cB * (cA * st - ct * sA * sp)
                const i = xp + yp * W
                if (ooz > zb[i]) {
                    zb[i] = ooz
                    out[i] = L > 0 ? ramp[Math.min(11, Math.floor(L * 8))] : '.'
                }
            }
        }
    }

    private planet(out: Grid) {
        const W = this.W
        const H = this.H
        const ASP = this.ASP
        const R = this.S * 0.64
        const lx = -0.55
        const ly = -0.5
        const lz = 0.67
        const rot = this.t * 0.6 + this.tx * 1.5
        const tilt = 0.35 + this.ty * 0.6
        const ct = Math.cos(tilt)
        const st = Math.sin(tilt)
        const ramp = ' .:-=+*#%@'
        const r0 = Math.max(0, Math.floor(this.cy - R * ASP - 1))
        const r1 = Math.min(H, Math.ceil(this.cy + R * ASP + 1))
        const c0 = Math.max(0, Math.floor(this.cx - R - 1))
        const c1 = Math.min(W, Math.ceil(this.cx + R + 1))
        for (let r = r0; r < r1; r++) {
            for (let c = c0; c < c1; c++) {
                const nx = (c + 0.5 - this.cx) / R
                const ny = (r + 0.5 - this.cy) / ASP / R
                const d = nx * nx + ny * ny
                if (d > 1) continue
                const nz = Math.sqrt(1 - d)
                const y2 = ny * ct - nz * st
                const z2 = ny * st + nz * ct
                const lon = Math.atan2(nx, z2) + rot
                const lat = Math.asin(Math.max(-1, Math.min(1, y2)))
                const f =
                    Math.sin(lon * 3 + Math.sin(lat * 4) * 1.6) *
                        Math.cos(lat * 2.2) +
                    0.45 * Math.sin(lon * 7 - lat * 5)
                const L = nx * lx + ny * ly + nz * lz
                const b = Math.max(0, L) * (f > 0.25 ? 1 : 0.5) + 0.05
                out[c + r * W] =
                    ramp[Math.max(1, Math.min(9, Math.floor(b * 10)))]
            }
        }
        // Ring: front half drawn over the planet, back half only in gaps
        for (let a = 0; a < TAU; a += 0.01) {
            const depth = Math.sin(a)
            const px = Math.cos(a) * R * 1.55
            const py = depth * R * 1.55 * 0.2 - Math.cos(a) * R * 0.12
            const xp = Math.floor(this.cx + px)
            const yp = Math.floor(this.cy + py * ASP)
            if (xp < 0 || xp >= W || yp < 0 || yp >= H) continue
            const i = xp + yp * W
            if (depth > 0) out[i] = '='
            else if (out[i] === ' ') out[i] = '-'
        }
    }

    // Precomputes a Fourier series that traces the letters "jw"
    private prepFourier(): FourierData {
        const segs = [
            {
                pen: 1,
                pts: [
                    [-1.0, -0.6],
                    [-0.3, -0.6],
                    [-0.55, -0.6],
                    [-0.55, 0.3],
                    [-0.6, 0.48],
                    [-0.75, 0.6],
                    [-0.9, 0.52],
                    [-0.98, 0.32],
                ],
            },
            {
                pen: 0,
                pts: [
                    [-0.98, 0.32],
                    [0.0, -0.6],
                ],
            },
            {
                pen: 1,
                pts: [
                    [0.0, -0.6],
                    [0.22, 0.6],
                    [0.45, -0.25],
                    [0.68, 0.6],
                    [0.9, -0.6],
                ],
            },
            {
                pen: 0,
                pts: [
                    [0.9, -0.6],
                    [-1.0, -0.6],
                ],
            },
        ]
        const pieces: {
            a: number[]
            b: number[]
            pen: number
            len: number
        }[] = []
        let total = 0
        segs.forEach(s => {
            for (let i = 0; i < s.pts.length - 1; i++) {
                const a = s.pts[i]
                const b = s.pts[i + 1]
                const len = Math.hypot(b[0] - a[0], b[1] - a[1])
                pieces.push({ a, b, pen: s.pen, len })
                total += len
            }
        })
        const N = 360
        const xs: number[] = []
        const ys: number[] = []
        const pen: number[] = []
        let pi = 0
        let acc = 0
        for (let n = 0; n < N; n++) {
            const d = (n / N) * total
            while (pi < pieces.length - 1 && acc + pieces[pi].len < d) {
                acc += pieces[pi].len
                pi++
            }
            const p = pieces[pi]
            const u = p.len > 0 ? (d - acc) / p.len : 0
            xs.push(p.a[0] + (p.b[0] - p.a[0]) * u)
            ys.push(p.a[1] + (p.b[1] - p.a[1]) * u)
            pen.push(p.pen)
        }
        const terms: FourierTerm[] = []
        for (let k = -N / 2 + 1; k <= N / 2; k++) {
            let re = 0
            let im = 0
            for (let n = 0; n < N; n++) {
                const ang = (-2 * Math.PI * k * n) / N
                const c = Math.cos(ang)
                const s = Math.sin(ang)
                re += xs[n] * c - ys[n] * s
                im += xs[n] * s + ys[n] * c
            }
            re /= N
            im /= N
            terms.push({ k, amp: Math.hypot(re, im), ph: Math.atan2(im, re) })
        }
        terms.sort((p, q) => q.amp - p.amp)
        const kept = terms.slice(0, 100)
        const px: number[] = []
        const py: number[] = []
        for (let n = 0; n < N; n++) {
            let x = 0
            let y = 0
            for (const tm of kept) {
                const ang = (2 * Math.PI * tm.k * n) / N + tm.ph
                x += tm.amp * Math.cos(ang)
                y += tm.amp * Math.sin(ang)
            }
            px.push(x)
            py.push(y)
        }
        return { N, terms: kept, px, py, pen }
    }

    private fourier(out: Grid) {
        if (!this.fz) this.fz = this.prepFourier()
        const F = this.fz
        const N = F.N
        const A = this.ASP
        const prog = Math.max(0, this.t * 26)
        const tau = prog % N
        const k = this.S * 1.12
        const sx = Math.cos(this.tx * 0.6)
        const sh = this.ty * 0.3
        const map = (x: number, y: number) => [
            this.cx + (x + 0.05) * k * sx,
            this.cy + (y + sh * (x + 0.05)) * k * A,
        ]
        // Epicycles
        let x = 0
        let y = 0
        for (let i = 0; i < F.terms.length && i < 40; i++) {
            const tm = F.terms[i]
            const ang = (2 * Math.PI * tm.k * tau) / N + tm.ph
            const nx = x + tm.amp * Math.cos(ang)
            const ny = y + tm.amp * Math.sin(ang)
            const p0 = map(x, y)
            const p1 = map(nx, ny)
            const rc = tm.amp * k
            if (tm.k !== 0 && rc > 1.5 && i < 16) {
                const steps = Math.ceil(rc * 7)
                for (let s = 0; s < steps; s++) {
                    const a = (s / steps) * TAU
                    this.put(
                        out,
                        p0[0] + Math.cos(a) * rc * sx,
                        p0[1] + Math.sin(a) * rc * A,
                        '.',
                        true
                    )
                }
            }
            if (rc > 0.4)
                this.line(out, p0[0], p0[1], p1[0], p1[1], null, false)
            x = nx
            y = ny
        }
        // Trail, fading with age
        const span = Math.min(N * 0.985, prog)
        const base = Math.floor(tau)
        for (let j = 1; j < span; j++) {
            const i0 = (((base - j) % N) + N) % N
            const i1 = (i0 + 1) % N
            if (!F.pen[i0] || !F.pen[i1]) continue
            const ch = j < N * 0.35 ? '#' : j < N * 0.7 ? '*' : '+'
            const a = map(F.px[i0], F.py[i0])
            const b = map(F.px[i1], F.py[i1])
            this.line(out, a[0], a[1], b[0], b[1], ch, false)
        }
        const head = map(x, y)
        this.put(out, head[0], head[1], '@', false)
    }

    private orbits(out: Grid) {
        const S = this.S
        const A = this.ASP
        const t = this.t
        const cx = this.cx
        const cy = this.cy
        const flat = 0.3 + this.ty * 0.18
        const rot = -0.2 + this.tx * 0.35
        const cr = Math.cos(rot)
        const sr = Math.sin(rot)
        const proj = (a: number, th: number) => {
            const x = a * Math.cos(th)
            const y = a * Math.sin(th) * flat
            return [cx + x * cr - y * sr, cy + (x * sr + y * cr) * A]
        }
        const planets = [
            { a: S * 0.42, w: 1.0, r: 0.8, ph: 0.3, moon: false, th: 0 },
            { a: S * 0.7, w: 0.46, r: 1.6, ph: 2.2, moon: false, th: 0 },
            { a: S * 0.98, w: 0.28, r: 2.3, ph: 4.1, moon: true, th: 0 },
        ]
        planets.forEach(p => {
            p.th = p.ph + t * p.w * 1.2
        })
        const disk = (x0: number, y0: number, rp: number, lit: boolean) => {
            if (rp < 1) {
                this.put(out, x0, y0, 'o', false)
                return
            }
            const rr = Math.ceil(rp * A) + 1
            const rc = Math.ceil(rp) + 1
            const lx = cx - x0
            const ly = (cy - y0) / A
            const ll = Math.hypot(lx, ly) || 1
            for (let dr = -rr; dr <= rr; dr++) {
                for (let dc = -rc; dc <= rc; dc++) {
                    const ux = dc
                    const uy = dr / A
                    const d = Math.hypot(ux, uy)
                    if (d > rp) continue
                    const dot = (ux * lx + uy * ly) / ll / (d || 1)
                    const ch =
                        d < rp * 0.45
                            ? lit
                                ? '@'
                                : '#'
                            : dot > -0.2
                              ? '#'
                              : '+'
                    this.put(out, x0 + dc, y0 + dr, ch, false)
                }
            }
        }
        // Draws everything on one side of the sun so planets pass behind it
        const isFront = (th: number) => Math.sin(th) > 0
        const layer = (front: boolean) => {
            planets.forEach(p => {
                const steps = Math.ceil(p.a * 9)
                for (let s = 0; s < steps; s++) {
                    const th = (s / steps) * TAU
                    if (isFront(th) !== front) continue
                    const q = proj(p.a, th)
                    this.put(out, q[0], q[1], '.', true)
                }
            })
            planets.forEach(p => {
                for (let d = 0.02; d < 0.95; d += 0.6 / p.a) {
                    const th = p.th - d
                    if (isFront(th) !== front) continue
                    const q = proj(p.a, th)
                    this.put(
                        out,
                        q[0],
                        q[1],
                        d < 0.25 ? '*' : d < 0.55 ? '+' : ':',
                        false
                    )
                }
            })
            planets.forEach(p => {
                if (isFront(p.th) !== front) return
                const q = proj(p.a, p.th)
                disk(q[0], q[1], p.r, true)
                if (p.moon) {
                    const ma = t * 2.4
                    const mr = p.r + 2.4
                    this.put(
                        out,
                        q[0] + Math.cos(ma) * mr,
                        q[1] + Math.sin(ma) * mr * 0.45 * A,
                        'o',
                        false
                    )
                }
            })
        }
        layer(false)
        const Rs = S * 0.17
        const ramp = ' .:-=+*#%@'
        const r0 = Math.max(0, Math.floor(cy - Rs * A - 1))
        const r1 = Math.min(this.H, Math.ceil(cy + Rs * A + 1))
        const c0 = Math.max(0, Math.floor(cx - Rs - 1))
        const c1 = Math.min(this.W, Math.ceil(cx + Rs + 1))
        for (let r = r0; r < r1; r++) {
            for (let c = c0; c < c1; c++) {
                const dx = (c + 0.5 - cx) / Rs
                const dy = (r + 0.5 - cy) / A / Rs
                const d2 = dx * dx + dy * dy
                if (d2 > 1) continue
                const b =
                    0.3 +
                    0.7 * Math.sqrt(1 - d2) +
                    0.07 * Math.sin(t * 4 + c * 0.7 + r * 1.3)
                out[c + r * this.W] =
                    ramp[Math.max(1, Math.min(9, Math.floor(b * 9.99)))]
            }
        }
        layer(true)
    }
}
