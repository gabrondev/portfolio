import { obterPostsMaisRecentes } from "@/functions/posts"
import PostCard from "../blog/PostCard"
import { IconArrowRight, IconNews } from "@tabler/icons-react"
import Link from "next/link"

export default async function UltimosPosts() {
    const posts = await obterPostsMaisRecentes()

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex text-2xl font-bold items-center gap-1">
                <IconNews size={28} />
                <h1>Últimos Posts</h1>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-3 sm:items-stretch gap-3 self-center">
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        titulo={post.titulo}
                        subtitulo={post.subtitulo}
                        criadoEm={post.criadoEm}
                        tags={post.tags}
                        slug={post.slug}
                    />
                ))}
            </div>

            <Link 
                className="
                    flex gap-1 self-end 
                    transition-all duration-200 
                    hover:opacity-70 hover:-translate-y-1
                " 
                href={'/blog'}
            >
                <span>Ver blog</span>
                <IconArrowRight stroke={1.6}/>
            </Link>
        </div>
    )
}
