import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { NewsController } from './controllers/news.controller';
import { CommentsModule } from './modules/comments/comments.module';
import { NewsModule } from './modules/news/news.module';

@Module({
  imports: [NewsModule, CommentsModule],
  controllers: [NewsController, CommentsController],
})
export class AppModule {}
