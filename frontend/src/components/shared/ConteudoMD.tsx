'use client'

import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { CodeBlock } from "../blog/BlocoCodigo"

export interface ConteudoMDProps {
    markdown: string
}

export default function ConteudoMD(props: ConteudoMDProps) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={
                {
                    img: ({ src, alt }) => (
                        <img
                            src={src}
                            alt={alt}
                            className="rounded-md block mx-auto max-w-full"
                        />
                    ),
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold mt-5 mb-3">{children}</h2>
                    ),
                    pre: ({ children }) => (
                        <pre className="m-0 p-0">{children}</pre>
                    ),
                    code: CodeBlock
                }
            }
        >
            {props.markdown}
        </Markdown>
    )
}