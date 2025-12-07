import { Projeto } from "@core";
import ItemListaProjetos from "./ItemListaProjetos";
import { ReactNode } from "react";

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
    icone: ReactNode
}

export default function ListaProjetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex text-2xl font-bold gap-1 items-center">
                {props.icone}
                <h3 >{props.titulo}</h3>
            </div>

            <div className="flex flex-col gap-3 mb-5 xl:grid xl:grid-cols-3 xl:items-stretch self-center">
                {props.lista.map(projeto => (
                    <div key={projeto.id}>
                        <ItemListaProjetos projeto={projeto} />
                    </div>
                ))}
            </div>
        </div>
    )
}