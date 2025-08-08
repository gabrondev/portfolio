import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostPrisma } from './post.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [PostController],
  providers: [PostPrisma],
  imports: [DbModule]
})
export class PostModule { }
