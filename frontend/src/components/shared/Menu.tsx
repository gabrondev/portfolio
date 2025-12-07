"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { IconHome, IconNews, IconTools } from "@tabler/icons-react"

export default function Menu() {
    const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}><IconHome size={16}/>Home</MenuItem>
            <MenuItem href="/blog" selecionado={caminho.startsWith("/blog")}><IconNews size={16}/>Blog</MenuItem>
            <MenuItem href="/projetos" selecionado={caminho.startsWith("/projeto")}><IconTools size={16}/>Projetos</MenuItem>
        </nav>
    )
}

function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado: boolean
    novaAba?: boolean
}) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span
                className={`
                    flex items-center gap-0.5 text-sm border-red-600 transition-all duration-200
                    ${props.selecionado ? "text-red-800 cursor-default" : "hover:opacity-70"}
                `}
            >
                {props.children}
            </span>
        </Link>
    )
}