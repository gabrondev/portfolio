import ListaProjetos from "@/components/projetos/ListaProjetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { IconBrandAndroid, IconBrandChrome, IconDeviceDesktop } from "@tabler/icons-react";

export default async function PaginaProjetos() {
    const projetos = await obterProjetos()

    return (
        <div>
            <Container>
                <ListaProjetos titulo="Web" icone={<IconBrandChrome size={28}/>} lista={projetos.web} />
                <ListaProjetos titulo="Mobile" icone={<IconBrandAndroid size={28}/>} lista={projetos.mobile} />
                <ListaProjetos titulo="Desktop" icone={<IconDeviceDesktop size={28}/>} lista={projetos.desktop} />
            </Container>
        </div>
    );
}