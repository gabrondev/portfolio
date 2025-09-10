import ListaPosts from "@/components/blog/ListaPosts";
import Container from "@/components/shared/Container";
import { obterPosts } from "@/functions/posts";

export const revalidate = 3600

export default async function PaginaBlog() {
    const posts = await obterPosts();

    return (
        <div>
            <Container className="py-7 flex flex-col items-center gap-5 mt-16">
                <h1 className="text-3xl font-bold self-start">Blog</h1>
                <ListaPosts posts={posts} />
            </Container>
        </div>
    )
}