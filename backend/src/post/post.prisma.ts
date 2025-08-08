import { Post } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class PostPrisma {
    constructor(private readonly prisma: PrismaProvider) { }

    async obterTodos(): Promise<Post[]> {
        return this.prisma.post.findMany({
            orderBy: { criadoEm: 'desc' }
        }) as any;
    }

    async obterPorSlug(slug: string): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: { slug }
        }) as any;
    }
}
