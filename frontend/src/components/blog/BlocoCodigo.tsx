import { ReactNode, useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark'

interface CodeBlockProps {
    className?: string
    children?: ReactNode
}

export function CodeBlock({ className, children }: CodeBlockProps) {
    const linguagem = className?.replace("language-", "") || ""
    const [copiado, setCopiado] = useState(false)

    if (!linguagem) {
        return (
            <code className=" text-zinc-200 bg-zinc-800 pt-0.5 px-1 rounded-sm">
                {children}
            </code>
        )
    }

    const gerenciarClipboard = () => {
        navigator.clipboard.writeText(String(children)).then(() => {
            setCopiado(true)
            setTimeout(() => setCopiado(false), 2000)
        })
    }

    return (
        <div className="rounded-md overflow-hidden border border-zinc-800">
            <div className="flex justify-between items-center bg-zinc-900 px-4 py-1 text-zinc-400 font-mono text-sm">
                <span>{linguagem || "code"}</span>
                <button
                    onClick={gerenciarClipboard}
                    className="text-zinc-400 hover:text-white transition"
                >
                    {copiado ? "Copiado!" : "Copiar"}
                </button>
            </div>

            <SyntaxHighlighter
                language={linguagem}
                style={atomDark}
                className="!m-0 !p-4 !rounded-none w-full"
                showLineNumbers
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        </div>
    )
}
