import Container from "../shared/Container";

export default function Rodape() {
    return (
        <Container className="flex justify-between w-full text-[12px] text-zinc-600 font-bold mb-2 mt-10">
            <p>Copyright © 2025 Gabriel Almeida</p>
            <p>Feito com React, TypeScript e muito ☕</p>
        </Container>
    )
}