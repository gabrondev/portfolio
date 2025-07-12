import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly repo: ProjetoPrisma) { }

    @Get()
    async obterTodos(): Promise<Projeto[]> {
        return this.repo.obterTodos()
    }

    @Get("ids")
    async listarIds(): Promise<{ id: string }[]> {
        const ids = await this.repo.listarIds();
        return ids.map(projeto => ({ id: projeto.id.toString() }));
    }

    @Get(":id")
    async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
        return this.repo.obterPorId(Number(id))
    }

}
