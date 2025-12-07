import Principal from "@/components/landing/Principal";
import ProjetosDestaque from "@/components/landing/ProjetosDestaque";
import UltimosPosts from "@/components/landing/UltimosPosts";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";

export const revalidate = 3600

export default async function Home() {

  const projetos = await obterProjetos()

  return (
    <div>
      <Container className="flex flex-col items-center gap-10 transition-all duration-200">
        <Principal/>
        <UltimosPosts />
        <ProjetosDestaque titulo="Projetos Destaque" lista={projetos.destaques}/>
      </Container>
    </div>
  );
}
