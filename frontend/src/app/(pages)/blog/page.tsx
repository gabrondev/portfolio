import ListaPosts from "@/components/blog/ListaPosts";
import Container from "@/components/shared/Container";
import { obterPosts } from "@/functions/posts";
import { IconNews } from "@tabler/icons-react";

export const revalidate = 3600

export default async function PaginaBlog() {
    const posts = await obterPosts();

    return (
        <Container className="flex flex-col gap-5">
            <div className="flex text-2xl font-bold items-center gap-1">
                <IconNews size={28} />
                <h1>Blog</h1>
            </div>
            
            <ListaPosts posts={posts} />
        </Container>
    )
}