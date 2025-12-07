import { IconCheck, IconCopy } from "@tabler/icons-react"
import { ReactNode, useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tema from 'react-syntax-highlighter/dist/esm/styles/prism/coy'

interface CodeBlockProps {
    className?: string
    children?: ReactNode
}

export function CodeBlock({ className, children }: CodeBlockProps) {
    const linguagem = className?.replace("language-", "") || ""
    const [copiado, setCopiado] = useState(false)

    if (!linguagem) {
        return (
            <code className=" text-zinc-800 bg-zinc-200 pt-0.5 px-1 rounded-sm">
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
        <div className="rounded-md overflow-hidden border border-zinc-300 mt-2 mb-2">
            <div className="flex justify-between items-center bg-zinc-200 text-zinc-800 px-4 py-1 font-mono text-sm">
                <span>{linguagem || "code"}</span>
                <button
                    onClick={gerenciarClipboard}
                    className="gap-0 text-zinc-600 hover:text-black transition"
                >
                    {
                    copiado 
                        ? <span className="flex items-center gap-0.5"><IconCheck size={18}/>Copiado!</span> 
                        : <span className="flex items-center gap-0.5"><IconCopy size={18}/>Copiar</span>
                    }
                </button>
            </div>

            <SyntaxHighlighter
                language={linguagem}
                style={tema}
                className="!m-0 !p-4 !rounded-none w-full"
                showLineNumbers
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        </div>
    )
}
