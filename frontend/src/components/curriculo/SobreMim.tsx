import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandWhatsappFilled, IconFileCvFilled, IconMailFilled } from "@tabler/icons-react"
import Link from "next/link"

export default function SobreMim() {
    return (
        <div className="flex-1 bg-black border border-zinc-800 rounded-2xl p-6">
            <p className="text-xl font-bold text-center text-white/70">
                Sobre Mim
            </p>
            <div className="text-zinc-300 text-justify space-y-2">
                <p>
                    Sou apaixonado por tecnologia desde os 10 anos e comecei programando blogs com HTML, CSS e JavaScript. Atualmente, estou me especializando em desenvolvimento fullstack com tecnologias modernas.
                </p>
                <p>
                    Me formei em engenharia de computação, onde adquiri sólidos conhecimentos em desenvolvimento de software e tive cases de melhoria de até 70% de produtividade em processos, com aplicações que desenvolvi.
                </p>
                <div className="flex justify-center gap-3">
                    <Link
                        href={"https://drive.google.com/file/d/1iJuvzGqqcIpyOV06VxYPVEDgTN0ixcIP/view?usp=sharing"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconFileCvFilled />
                    </Link>

                    <Link
                        href={"https://www.linkedin.com/in/gabrondev/"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconBrandLinkedinFilled />
                    </Link>

                    <Link
                        href={"https://github.com/gabrondev"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconBrandGithubFilled />
                    </Link>

                    <Link
                        href={"mailto:gabrieltux19@gmail.com"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconMailFilled />
                    </Link>

                    <Link
                        href={"https://api.whatsapp.com/send/?phone=5511934391251&text&type=phone_number"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconBrandWhatsappFilled />
                    </Link>
                </div>
            </div>
        </div>
    )
}