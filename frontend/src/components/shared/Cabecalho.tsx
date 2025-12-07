import Container from "./Container";
import Link from "next/link"
import Menu from "./Menu";
import { IconLanguage, IconMoon, IconSearch } from "@tabler/icons-react";

export default function Cabecalho() {
    return (
        <header className="w-full flex items-center h-16">
            <Container className="flex-1 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/" className="hidden sm:block text-lg font-black transition-opacity hover:opacity-70">
                        GabronDEV
                    </Link>
                    <Menu />
                </div>
                <div className="relative group flex gap-1">
                    <IconLanguage className="transition-opacity group-hover:opacity-70"/>
                    <IconMoon className="transition-opacity group-hover:opacity-70"/>
                    <IconSearch className="transition-opacity group-hover:opacity-70" />

                    <span className="
                        absolute left-1/2 -translate-x-1/2 top-full mt-2
                        whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded
                        opacity-0 group-hover:opacity-100
                        pointer-events-none
                        transition-all duration-200
                    ">
                        Work in progress
                    </span>
                </div>
            </Container>
        </header>
    )
}