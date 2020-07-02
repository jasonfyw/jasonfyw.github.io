import React from 'react';

export function LogoInstagram(props) {
    return (
        <svg className="logo-instagram" viewBox="0 0 512 512"><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" stroke={props.color} fill={props.color} /><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" stroke={props.color} fill={props.color} /><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" stroke={props.color} fill={props.color}/></svg>
    )
}

export function MailOutline(props) {
    return (
        <svg className="mail-outline" viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='40' ry='40' style={{ 'fill': 'none', 'stroke': props.color, 'strokeLinecap': 'round', 'strokeLinejoin': 'round', 'strokeWidth': '32px' }} /><polyline points='112 160 256 272 400 160' style={{ 'fill': 'none', 'stroke': props.color, 'strokeLinecap': 'round', 'strokeLinejoin': 'round', 'strokeWidth': '32px' }} /></svg>
    )
}