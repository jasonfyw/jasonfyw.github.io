import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkMathPlugin from 'remark-math'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

const MarkdownRender = props => {
    const newProps = {
        ...props,
        remarkPlugins: [RemarkMathPlugin, remarkGfm],
        rehypePlugins: [rehypeKatex],
        components: {
            math: ({ value }) => <BlockMath math={value} />,
            inlineMath: ({ value }) => <InlineMath math={value} />,
        },
        children: props.markdown,
    }

    return (
        <>
            <ReactMarkdown className='markdown' {...newProps} />
        </>
    )
}

export default MarkdownRender
