import { obterPostsMaisRecentes } from "@/functions/posts"
import PostCard from "../blog/PostCard"
import { IconArrowRight, IconNews } from "@tabler/icons-react"
import Link from "next/link"

export default async function UltimosPosts() {
    const posts = await obterPostsMaisRecentes()

    return (
        <div className="flex flex-col w-7/10 md:11/12 xl:w-full gap-5">
            <div className="flex text-2xl font-bold items-center gap-1">
                <IconNews size={28} />
                <h1>Últimos Posts</h1>
            </div>

            <div className="flex flex-col xl:grid xl:grid-cols-3 xl:items-stretch gap-3 self-center
                            ">
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

            <Link className="flex gap-1 self-end" href={'/blog'}>
                <span>Ver blog</span>
                <IconArrowRight stroke={1} />
            </Link>
        </div>
    )
}
