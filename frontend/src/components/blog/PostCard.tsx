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
        
        <Link href={`/blog/post/${props.slug}`}>
            <div className="
                flex flex-col w-full h-full bg-zinc-50 shadow-sm p-6 rounded-xl 
                transition-all duration-200 
                hover:bg-zinc-200 hover:-translate-y-1 hover:shadow-md
            ">
                <span className="text-xs">
                    {new Date(props.criadoEm).toLocaleDateString('pt-br', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </span>

                
                    <h1 className="text-xl font-bold">{props.titulo.toUpperCase()}</h1>
                
                
                <h2 className="text-sm mb-2 flex-1">{props.subtitulo}</h2>

                <span className="text-xs">{props.tags?.map(tag => tag.nome.toUpperCase()).join(' / ') || ''}</span>
            </div>
        </Link>
    )
}