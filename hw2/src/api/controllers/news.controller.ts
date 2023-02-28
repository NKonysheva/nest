import {
  Res,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { newsTemplate } from '../../views/news';
import { DecrementId } from '../../utils/decrement-id.decorator';
import { News } from '../dto/news.dto';
import { NewsService } from '../modules/news/news.service';
import { newsDetail } from '../../views/news-detail';
import { drawDocument } from '../../views/dcument';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Put('create')
  async createNews(@Body() data: News, @Res() res: Response): Promise<void> {
    let msg = '';
    let status = 200;
    try {
      await this.newsService.createNews(data);
      msg = 'Successfully created';
    } catch (e) {
      msg = (<any>e).detail;
      status = 500;
    }
    res.status(status).send(msg);
  }

  @Post('update')
  async updateNews(@Body() data: News, @Res() res: Response): Promise<void> {
    let msg = '';
    let status = 200;
    try {
      msg = await this.newsService.updateNews(data);
    } catch (e) {
      msg = (<any>e).message;
      status = 500;
    }
    res.status(status).send(msg);
  }

  @Get('/')
  async getNewsAll(): Promise<string> {
    const news = await this.newsService.getNewsAll();
    return drawDocument(newsTemplate(news));
  }

  @Get('get-one')
  async getNewsOne(
    @Query() @DecrementId(['id']) query: { id: number },
  ): Promise<string> {
    const news = await this.newsService.getNews(query.id);
    drawDocument;
    return drawDocument(newsDetail(news));
  }

  @Delete('delete')
  async deleteNewsOne(@Body() body: { id: number }): Promise<News[]> {
    return this.newsService.deleteNews(body.id);
  }
}
