import { Tag } from "@core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import ConteudoPost from "./ConteudoPost";
import Container from "../shared/Container";

interface PostProps {
    titulo: string
    subtitulo: string
    conteudo: string
    criadoEm: Date
    tags: Tag[]
}

export default function Post(props: PostProps) {
    return (
        <Container className="py-7 flex flex-col items-center mt-16 gap-2">
            <Link className="flex self-start items-center text-zinc-400 text-sm" href={'/blog'}>
                <IconArrowLeft stroke={1} />
                <span>Voltar</span>
            </Link>

            <span className="text-md text-zinc-200 font-bold -mb-1.5">
                {new Date(props.criadoEm).toLocaleDateString('pt-br', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}
            </span>

            <h1 className="text-[36px] font-bold -mb-4">{props.titulo.toUpperCase()}</h1>
            <h2 className="text-lg font-bold text-center text-zinc-400 mb-1">{props.subtitulo}</h2>
            <span className="text-md text-zinc-400 mb-2">{props.tags?.map(tag => tag.nome.toUpperCase()).join(' / ') || ''}</span>

            <ConteudoPost markdown={props.conteudo} />
        </Container>
    )
}