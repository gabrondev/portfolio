import Post from "@/components/blog/Post";
import { obterPostPorSlug } from "@/functions/posts";

export default async function PaginaPost(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params
    const post = await obterPostPorSlug(slug);

    if (!post) return null

    return (
        <Post
            titulo={post.titulo}
            subtitulo={post.subtitulo}
            conteudo={post.conteudo}
            tags={post.tags}
            criadoEm={post.criadoEm}
        />
    )
}