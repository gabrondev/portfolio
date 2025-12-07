import { Projeto } from "@core";
import { IconArrowRight, IconTools } from "@tabler/icons-react";
import Link from "next/link";
import ItemListaProjetos from "../projetos/ItemListaProjetos";

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function ProjetosDestaque(props: ProjetosProps) {
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex text-2xl font-bold gap-1 items-center">
                <IconTools size={28} />
                <h3 >{props.titulo}</h3>
            </div>

            <div className="flex flex-col gap-3 self-center sm:grid sm:grid-cols-3">
                {props.lista.map(projeto => (
                    <div key={projeto.id}>
                        <ItemListaProjetos projeto={projeto} />
                    </div>
                ))}
            </div>

            <Link 
                className="
                    flex gap-1 self-end 
                    transition-all duration-200 
                    hover:opacity-70 hover:-translate-y-1
                " 
                href={'/projetos'}
            >
                <span>Ver projetos</span>
                <IconArrowRight stroke={1.6}/>
            </Link>
        </div>
    )
}