import { IconHandLoveYou, IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandWhatsappFilled, IconFileCvFilled, IconMailFilled } from "@tabler/icons-react"

import Link from "next/link"


export default function Principal() {
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex text-2xl font-bold items-center gap-1">
                <IconHandLoveYou size={28} />
                <h1>Hello, world!</h1>
            </div>
            <p>
                Sou um desenvolvedor fullstack júnior com experiência na criação de APIs RESTful escaláveis
                com .NET C#, e interfaces modernas e responsivas com frameworks JavaScript de ponta como
                React, Next e TypeScript, com sólida experiência em banco de dados SQL Server (DML, DDL e DTL).
            </p>

                <div className="flex gap-3">
                    <span>Fale comigo:</span>
                    <Link
                        href={"https://drive.google.com/file/d/1iJuvzGqqcIpyOV06VxYPVEDgTN0ixcIP/view?usp=sharing"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="self-center transition-all duration-200 hover:opacity-70 hover:-translate-y-1"
                    >
                        <IconFileCvFilled  size={20}/>
                    </Link>

                    <Link
                        href={"https://www.linkedin.com/in/gabrondev/"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="self-center transition-all duration-200 hover:opacity-70 hover:-translate-y-1"
                    >
                        <IconBrandLinkedinFilled size={20}/>
                    </Link>

                    <Link
                        href={"https://github.com/gabrondev"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="self-center transition-all duration-200 hover:opacity-70 hover:-translate-y-1"
                    >
                        <IconBrandGithubFilled size={20}/>
                    </Link>

                    <Link
                        href={"mailto:gabrieltux19@gmail.com"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="self-center transition-all duration-200 hover:opacity-70 hover:-translate-y-1"
                    >
                        <IconMailFilled size={20}/>
                    </Link>

                    <Link
                        href={"https://api.whatsapp.com/send/?phone=5511934391251&text&type=phone_number"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="self-center transition-all duration-200 hover:opacity-70 hover:-translate-y-1"
                    >
                        <IconBrandWhatsappFilled size={20}/>
                    </Link>
                </div>
        </div>
    )
}