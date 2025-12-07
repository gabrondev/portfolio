import { Post } from "@core";
import PostCard from "./PostCard";

interface ListaPostsProps {
    posts: Post[]
    verProjetos?: boolean
}

export default function ListaPosts(props: ListaPostsProps) {
    const posts = props.posts
    return (
        posts.map(post => (
            <PostCard key={post.id}
                titulo={post.titulo}
                subtitulo={post.subtitulo}
                slug={post.slug}
                criadoEm={post.criadoEm}
                tags={post.tags}
            />
        ))
    )
}