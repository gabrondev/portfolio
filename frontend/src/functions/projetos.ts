import { Projeto, Tipo } from "@core";
import { httpGet } from "./api";

export async function obterProjetos() {
    const projetos: Projeto[] = await httpGet("/projetos")

    return {
        todos: projetos,
        get mobile() {
            return projetos.filter(projeto => projeto.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter(projeto => projeto.tipo === Tipo.WEB)
        },
        get desktop() {
            return projetos.filter(projeto => projeto.tipo === Tipo.DESKTOP)
        },
        get destaques() {
            return projetos.filter(projeto => projeto.destaque)
        }
    }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
    return await httpGet(`/projetos/${id}`)
}

export async function listarIds() {
    return await httpGet('/projetos/ids')
}