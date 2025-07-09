import { Projeto } from "@core";
import Image from "next/image";
import Link from "next/link";

export interface ItemProjetoProps {
    projeto: Projeto,
    descritivo?: boolean
}

export default function ItemCarrosselProjetos(props: ItemProjetoProps) {
    const projeto = props.projeto

    return (
        <Link href={`/projeto/${props.projeto.id}`}>
            <div className="
    relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 min-w-64
">
                <Image src={projeto.imagens[0]} alt={projeto.nome} fill className="object-cover" />
            </div>
        </Link>
    )
}