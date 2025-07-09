import Link from "next/link";
import Tecnologias from "../tecnologias/Tecnologias";
import CarrosselImagens from "../shared/CarrosselImagens";
import { Projeto } from "@core";

interface ItemListaProjetosProps {
    projeto: Projeto
}

export default async function ItemListaProjetos(props: ItemListaProjetosProps) {
    const projeto = props.projeto

    return (
        <div className="bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <CarrosselImagens imagens={projeto.imagens.slice(1)} link={`/projeto/${projeto.id}`} />

            <div className="flex flex-col items-center gap-1 py-3">
                <Link href={`/projeto/${projeto.id}`}>
                    <h3 className="text-xl font-bold text-white/70">{projeto.nome}</h3>
                </Link>
                <p className="text-justify">{projeto.descricao}</p>
                <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
            </div>
        </div>
    )
}