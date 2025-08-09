import BotaoChat from "@/components/chat/BotaoChat";
import Cabecalho from "@/components/shared/Cabecalho";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <div>
            <Cabecalho />
            {props.children}
            <BotaoChat />
        </div>
    )
}