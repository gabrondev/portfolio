'use client'

import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { CodeBlock } from "../blog/BlocoCodigo"
import { IconExternalLink } from "@tabler/icons-react"

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
                            className="rounded-md block mx-auto max-w-full mt-2 mb-2"
                        />
                    ),
                    h1: ({ children }) => (
                        <h1 className="text-2xl font-bold mt-3 mb-1">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-xl font-semibold mt-3 mb-1">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-lg font-semibold mt-3 mb-1">{children}</h3>
                    ),
                    pre: ({ children }) => (
                        <pre className="m-0 p-0">{children}</pre>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-all duration-200 hover:opacity-70 hover:cursor-pointer"
                        >
                            {children}
                            <IconExternalLink size={18} stroke={1.7} className="inline mb-0.5 ml-0.5" />
                        </a>
                    ),
                   p: ({ children }) => (
                        <p className="mt-2 mb-2">{children}</p>
                    ),
                    ul: ({ children }) => (
                    <ul className="list-disc list-outside ml-6 my-4">
                        {children}
                    </ul>
                    ),
                    ol: ({ children }) => (
                    <ol className="list-decimal list-outside ml-6 my-4">
                        {children}
                    </ol>
                    ),
                    li: ({ children }) => (
                    <li className="my-1">
                        {children}
                    </li>
                    ),
                    code: CodeBlock
                }
            }
        >
            {props.markdown}
        </Markdown>
    )
}