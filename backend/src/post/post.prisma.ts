import { Post } from '@core';
import { Injectable } from '@nestjs/common';
import { Tag } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class PostPrisma {
    constructor(private readonly prisma: PrismaProvider) { }

    async obterTodos(): Promise<Post[]> {
        return this.prisma.post.findMany({
            orderBy: { criadoEm: 'desc' },
            include: { tags: true }
        }) as any;
    }

    async obterMaisRecentes(): Promise<Post[]> {
        return this.prisma.post.findMany({
            orderBy: { criadoEm: 'desc' },
            take: 3,
            include: { tags: true }
        }) as any
    }

    async obterPorSlug(slug: string): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: { slug },
            include: { tags: true }
        }) as any;
    }

    async obterTags(): Promise<Tag[]> {
        return this.prisma.tag.findMany();
    }
}

