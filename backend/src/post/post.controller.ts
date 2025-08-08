import { Controller, Get, Param } from '@nestjs/common';
import { PostPrisma } from './post.prisma';
import { Post } from '@core';

@Controller('posts')
export class PostController {
    constructor(private readonly repo: PostPrisma) { }

    @Get()
    async obterTodos(): Promise<Post[]> {
        return this.repo.obterTodos();
    }

    @Get(':slug')
    async obterPorSlug(@Param('slug') slug: string): Promise<Post | null> {
        return this.repo.obterPorSlug(slug);
    }
}
