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
import { AppService } from './app.service';
import { News } from './database/entities/news.entity';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put('create')
  async createNews(@Body() data: News, @Res() res: Response): Promise<void> {
    let msg = '';
    let status = 200;
    try {
      await this.appService.createNews(data);
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
      msg = await this.appService.updateNews(data);
    } catch (e) {
      msg = (<any>e).message;
      status = 500;
    }
    res.status(status).send(msg);
  }

  @Get('get-all')
  async getNewsAll(): Promise<News[]> {
    return this.appService.getNewsAll();
  }

  @Get('get-one')
  async getNewsOne(@Query() query: { id: number }): Promise<News | null> {
    return this.appService.getNewsOne(query.id);
  }

  @Delete('delete')
  async deleteNewsOne(@Body() body: { id: number }): Promise<News> {
    return this.appService.deleteNewsOne(body.id);
  }
}
