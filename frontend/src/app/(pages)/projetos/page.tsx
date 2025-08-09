import ListaProjetos from "@/components/projetos/ListaProjetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";

export default async function PaginaProjetos() {
    const projetos = await obterProjetos()

    return (
        <div>
            <Container className="py-2 mt-16">
                <ListaProjetos titulo="Web" lista={projetos.web} />
                <ListaProjetos titulo="Mobile" lista={projetos.mobile} />
                <ListaProjetos titulo="Desktop" lista={projetos.desktop} />
            </Container>
        </div>
    );
}