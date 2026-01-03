import Rodape from "@/components/landing/Rodape";
import Cabecalho from "@/components/shared/Cabecalho";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <div>
            <Cabecalho />
            {props.children}
            <Rodape/>
        </div>
    )
}