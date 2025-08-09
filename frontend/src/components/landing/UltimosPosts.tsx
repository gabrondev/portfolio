import { obterPostsMaisRecentes } from "@/functions/posts"
import PostCard from "../blog/PostCard"
import { IconArrowRight, IconNews } from "@tabler/icons-react"
import Link from "next/link"

export default async function UltimosPosts() {
    const posts = await obterPostsMaisRecentes()

    return (
        <div className="flex flex-col gap-5">
            <div className="flex text-2xl font-bold items-center gap-1">
                <IconNews size={28} />
                <h1>Últimos Posts</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 items-stretch">
                {posts.map(post => (
                    <PostCard key={post.id}
                        titulo={post.titulo}
                        subtitulo={post.subtitulo}
                        criadoEm={post.criadoEm}
                        tags={post.tags}
                        slug={post.slug}
                    />
                ))}
            </div>
            <Link className="flex gap-1 self-end" href={'/blog'}>
                <span className="">Ver blog</span>
                <IconArrowRight stroke={1} />
            </Link>
        </div>
    )
}