import Tecnologia from "../tecnologia/Tecnologia"
import { Tag } from "./Tag"

export default interface Post {
    id: number
    titulo: string
    subtitulo: string
    slug: string
    conteudo: string
    tags: Tag[]
    tecnologias: Tecnologia[]
    criadoEm: Date
}