import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { PostModule } from './post/post.module';
import { RevalidateController } from './revalidate.controller';

@Module({
  imports: [DbModule, ProjetoModule, TecnologiaModule, PostModule],
  controllers: [AppController, RevalidateController],
})
export class AppModule { }
