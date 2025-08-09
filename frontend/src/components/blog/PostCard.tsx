import { Tag } from "@core";
import Link from "next/link";

interface PostCardProps {
    titulo: string
    subtitulo: string
    slug: string
    criadoEm: Date
    tags: Tag[]
}

export default function PostCard(props: PostCardProps) {
    return (
        <div className="
        flex flex-col w-full h-full self-start p-6 
        bg-black border border-zinc-800 rounded-2xl
        ">
            <span className="text-xs text-zinc-200">
                {new Date(props.criadoEm).toLocaleDateString('pt-br', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}
            </span>

            <Link href={`/blog/post/${props.slug}`}>
                <h1 className="text-2xl font-bold flex-1">{props.titulo.toUpperCase()}</h1>
            </Link>
            <h2 className="text-md mb-2 flex-1 align-baseline">{props.subtitulo}</h2>

            <span className="text-xs">{props.tags?.map(tag => tag.nome.toUpperCase()).join(' / ') || ''}</span>
        </div>
    )
}