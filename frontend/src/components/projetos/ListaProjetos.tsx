import { Projeto } from "@core";
import ItemListaProjetos from "./ItemListaProjetos";

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function ListaProjetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-3xl font-bold">{props.titulo}</h3>
            {props.lista.map(projeto => (
                <div key={projeto.id}>
                    <ItemListaProjetos projeto={projeto} />
                </div>
            ))}
        </div>
    )
}