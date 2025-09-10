import { Controller, Get, Param } from '@nestjs/common';
import { PostPrisma } from './post.prisma';
import { Post, Tag } from '@core';

@Controller('posts')
export class PostController {
    constructor(private readonly repo: PostPrisma) { }

    @Get()
    async obterTodos(): Promise<Post[]> {
        return this.repo.obterTodos();
    }

    @Get('recentes')
    async obterMaisRecentes(): Promise<Post[]> {
        return this.repo.obterMaisRecentes();
    }

    @Get('tags')
    async obterTags(): Promise<Tag[]> {
        return this.repo.obterTags();
    }

    @Get('slugs')
    async listarSlugs(): Promise<{ slug: string }[]> {
        const slugs = await this.repo.listarSlugs()
        return slugs
    }

    @Get(':slug')
    async obterPorSlug(@Param('slug') slug: string): Promise<Post | null> {
        return this.repo.obterPorSlug(slug);
    }
}
