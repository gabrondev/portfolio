import { obterTecnologias } from "@/functions/tecnologias"

export default async function TecnologiasTrabalhadas() {
    const tecnologias = await obterTecnologias()

    return (
        <div className="flex-1 bg-black border border-zinc-800 rounded-2xl p-6">
            <p className="text-xl font-bold text-center text-white/70">
                Tecnologias Trabalhadas
            </p>
            <div className="flex">
                <div className="flex justify-center gap-x-3 flex-wrap">
                    {tecnologias.todas.map((tecnologia) => (
                        <div key={tecnologia.id}>
                            <span className="text-red-500 font-bold">#</span>
                            <span>{tecnologia.nome}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}