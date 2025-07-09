import ListaProjetos from "@/components/projetos/ListaProjetos";
import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";

export default async function PaginaProjetos() {
    const projetos = await obterProjetos()

    return (
        <div>
            <Cabecalho />
            <Container className="py-2">
                <ListaProjetos titulo="Web" lista={projetos.web} />
                <ListaProjetos titulo="Mobile" lista={projetos.mobile} />
                <ListaProjetos titulo="Desktop" lista={projetos.desktop} />
            </Container>
        </div>
    );
}