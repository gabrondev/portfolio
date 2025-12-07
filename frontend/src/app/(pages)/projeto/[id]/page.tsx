import Readme from "@/components/projetos/Readme";
import CarrosselImagens from "@/components/shared/CarrosselImagens";
import Container from "@/components/shared/Container";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { obterReadme } from "@/functions/github";
import { listarIds, obterProjeto } from "@/functions/projetos";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export async function generateStaticParams() {
    return await listarIds();
}

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const { id } = params;
    const projeto = await obterProjeto(id)
    if (!projeto) return null
    const readme = await obterReadme(projeto.repositorio)

    return (
        <Container className="flex flex-col items-center gap-5">
            <Link 
                className="
                    flex self-start items-center text-sm
                    transition-all duration-200 
                    hover:opacity-70 hover:-translate-y-1
                " 
                href={'/projetos'}
            >
                <IconArrowLeft stroke={1.6} />
                <span>Voltar</span>
            </Link>

            <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
            <CarrosselImagens imagens={projeto.imagens.slice(1)} />
            <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
            <Readme markdown={readme} />
        </Container>
    )
}