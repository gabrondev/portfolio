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
        <Container className="flex flex-col items-center gap-2">
            <Link 
                className="
                    flex self-start items-center text-sm
                    transition-all duration-200 
                    hover:opacity-70 hover:-translate-y-1
                " 
                href={'/blog'}
            >
                <IconArrowLeft stroke={1.6} />
                <span>Voltar</span>
            </Link>

            <span className="text-[14px] -mb-3.5">
                {new Date(props.criadoEm).toLocaleDateString('pt-br', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}
            </span>

            <h1 className="text-[32px] text-center font-bold -mb-5">{props.titulo.toUpperCase()}</h1>
            <h2 className="text-lg font-bold text-center">{props.subtitulo}</h2>
            <span className="-mt-1 mb-1 text-[13px] opacity-65">{props.tags?.map(tag => tag.nome.toUpperCase()).join(' / ') || ''}</span>

            <ConteudoPost markdown={props.conteudo} />
        </Container>
    )
}