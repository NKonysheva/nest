import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { NewsController } from './controllers/news.controller';
import { CommentsModule } from './modules/comments/comments.module';
import { NewsModule } from './modules/news/news.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    NewsModule,
    CommentsModule,
    ServeStaticModule.forRoot({
      // rootPath: join(__dirname, '../..', 'public'),
      rootPath: './public',
    }),
  ],
  controllers: [NewsController, CommentsController],
})
export class AppModule {}
