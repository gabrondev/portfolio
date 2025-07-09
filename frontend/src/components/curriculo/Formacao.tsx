export default function Formacao() {
    return (
        <div className="flex-1 bg-black border border-zinc-800 rounded-2xl p-6 text-zinc-300 text-justify">
            <p className="text-xl font-bold text-center text-white/70">
                Formação Acadêmica
            </p>
            <div className="space-y-4">
                <div>
                    <p className="font-semibold">
                        Desenvolvimento Fullstack
                    </p>
                    <p className="text-[13px]">FormaçãoDEV | Nov. 2024 - atualmente</p>
                    <p className="text-sm">
                        Especialização em desenvolvimento fullstack com tecnologias e frameworks como React, TypeScript, Next.js, Docker, Jest, PostgreSQL, Git, TailwindCSS, IA, entre outros.
                    </p>
                </div>

                <div>
                    <p className="font-semibold">
                        Engenharia de Computação
                    </p>
                    <p className="text-[13px] text-zinc-400">UniFECAF | Fev. 2020 - dez. 2024</p>
                    <p className="text-sm">
                        Formação multidisciplinar em software e hardware. Obtive conhecimentos teóricos e práticos essenciais para um desenvolvedor, onde desenvolvi projetos integrando hardware e software com diversas tecnologias.
                    </p>
                </div>
            </div>
        </div>
    )
}