import Link from "next/link";
import { Projeto } from "@core";
import Image from "next/image";
import { IconBrandGithubFilled } from "@tabler/icons-react";

interface ItemListaProjetosProps {
    projeto: Projeto
}

export default async function ItemListaProjetos(props: ItemListaProjetosProps) {
    const projeto = props.projeto

    return (
            <div className="
                flex flex-col h-full bg-zinc-50 shadow-sm p-6 rounded-xl
                transition-all duration-200
                hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-md 
            ">
                <Link className="flex h-full" href={`/projeto/${projeto.id}`}>
                    <div className="flex flex-col items-center gap-1 py-3">
                        <Image className="rounded-xl" src={projeto.imagens[0]} alt="Logo do projeto." height={180} width={180}/>
                        <h3 className="text-xl font-bold">{projeto.nome}</h3>
                        <p className="text-sm flex-1">{projeto.descricao}</p>
                    </div>
                </Link>

                <Link 
                    href={projeto.repositorio} 
                    target="_blank" 
                    className="flex self-center text-sm gap-0.5 transition-all hover:-translate-y-1"
                >
                    <IconBrandGithubFilled size={20}/>
                    Repositório
                </Link>
            
        </div>
    )
}