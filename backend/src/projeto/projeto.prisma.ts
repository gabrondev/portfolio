import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
    constructor(private readonly prisma: PrismaProvider) { }

    async obterTodos(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany({
            include: { tecnologias: true }
        }
        ) as any
    }

    async obterPorId(id: number): Promise<Projeto | null> {
        return this.prisma.projeto.findUnique({
            where: { id },
            include: { tecnologias: true }
        }) as any
    }

    async listarIds(): Promise<{ id: number }[]> {
        return this.prisma.projeto.findMany({
            select: { id: true },
        });
    }
}
