import Formacao from "./Formacao"
import SobreMim from "./SobreMim"
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"

export default function Curriculo() {
    return (
        <div className="
            flex flex-col gap-5 items-center 
            sm:items-start w-7/10 md:11/12 
            xl:flex-row xl:w-full xl:items-stretch
        ">
            <SobreMim />
            <Formacao />
            <TecnologiasTrabalhadas />
        </div>
    )
}