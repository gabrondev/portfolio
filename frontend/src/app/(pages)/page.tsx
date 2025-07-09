import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import CarrosselProjetos from "@/components/projetos/CarrosselProjetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {

  const tecnologias = await obterTecnologias()
  const projetos = await obterProjetos()

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques} />
      <Container className="py-16 flex flex-col items-center gap-10">
        <CarrosselProjetos titulo="Projetos" lista={projetos.destaques} />
        <Curriculo />
      </Container>
    </div>
  );
}
