"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
    const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>Início</MenuItem>
            <MenuItem href="/projetos" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <MenuItem href="https://github.com/gabrondev" selecionado={false} novaAba>GitHub</MenuItem>
            <MenuItem href="https://drive.google.com/file/d/1iJuvzGqqcIpyOV06VxYPVEDgTN0ixcIP/view" selecionado={false} novaAba>Currículo</MenuItem>
            <MenuItem href="https://api.whatsapp.com/send/?phone=5511934391251&text&type=phone_number" selecionado={false} novaAba>Contato</MenuItem>
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
                    flex items-center gap-2 text-sm border-red-600 hover:text-white
                    ${props.selecionado ? "border-b-4 text-white" : "text-zinc-400"}
                `}
            >
                {props.children}
            </span>
        </Link>
    )
}