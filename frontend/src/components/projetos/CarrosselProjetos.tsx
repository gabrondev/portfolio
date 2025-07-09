import { Projeto } from "@core";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ItemCarrosselProjetos from "./ItemCarrosselProjetos";

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function CarrosselProjetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col gap-5 items-center sm:items-start w-7/10 md:11/12 xl:w-full ">
            <h3 className="text-2xl font-bold text-white/70">{props.titulo}</h3>
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
        </div>
    )
}