import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Link from "next/link"

export interface CarrosselImagensProps {
    imagens: string[],
    link?: string
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
    return (
        <Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
            <CarouselContent>
                {props.imagens.map((imagem) => (
                    <CarouselItem key={imagem} className="relative h-96 w-full rounded-xl">
                        {props.link ? (
                            <Link href={props.link}>
                                <Image src={imagem} alt={"Imagem"} fill className="object-cover" />
                            </Link>
                        ) :
                            (
                                <Image src={imagem} alt={"Imagem"} fill className="object-cover" />
                            )}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}