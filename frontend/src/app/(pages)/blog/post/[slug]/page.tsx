import Readme from "@/components/projetos/Readme";
import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import { obterPostPorSlug } from "@/functions/posts";

export default async function PaginaPost(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params
    const post = await obterPostPorSlug(slug);

    if (!post) return null

    return (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col flex-1 items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{post.titulo}</h1>
                <Readme markdown={post.conteudo} />
            </Container>
        </div>
    )
}