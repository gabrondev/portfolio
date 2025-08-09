import Image from "next/image";
import Container from "./Container";
import Link from "next/link"
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <header className="w-full flex items-center h-16 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-[9999] border border-zinc-900">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    <Link
                        href="https://www.linkedin.com/in/gabrondev/"
                        target="_blank"
                        className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
                    >
                        LinkedIn
                    </Link>
                </div>
            </Container>
        </header>
    )
}