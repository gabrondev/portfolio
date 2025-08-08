import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import { obterPosts } from "@/functions/posts";
import Link from "next/link";

export default async function PaginaBlog() {
    const posts = await obterPosts();

    return (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col flex-1 items-center gap-10">
                {posts.map(post => (
                    <Link key={post.id} href={`/blog/post/${post.slug}`}>
                        <h1>{post.titulo}</h1>
                        <p>{new Date(post.criadoEm).toLocaleDateString()}</p>
                    </Link>
                ))}
            </Container>
        </div>
    )
}