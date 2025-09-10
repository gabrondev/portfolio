import { Projeto } from "@core";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ItemCarrosselProjetos from "./ItemCarrosselProjetos";
import { IconArrowRight, IconTools } from "@tabler/icons-react";
import Link from "next/link";

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function CarrosselProjetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col gap-5 items-center sm:items-start w-7/10 md:11/12 xl:w-full ">
            <div className="flex text-2xl font-bold gap-1 items-center">
                <IconTools size={28} />
                <h3 >{props.titulo}</h3>
            </div>
            <Carousel
                opts={{
                    align: "center",
                    loop: true
                }}
                className="w-full"
            >
                <CarouselContent className="flex">
                    {props.lista.map(projeto => (
                        <CarouselItem key={projeto.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <ItemCarrosselProjetos projeto={projeto} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Link className="flex gap-1 self-end" href={'/projetos'}>
                <span className="">Ver projetos</span>
                <IconArrowRight stroke={1} />
            </Link>
        </div>
    )
}