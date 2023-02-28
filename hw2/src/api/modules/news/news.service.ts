import { Injectable } from '@nestjs/common';
import { News } from 'src/api/dto/news.dto';

const news: News[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first description',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod perferendis corrupti nostrum nisi, eum reprehenderit temporibus porro tempora repellat. Dolor nemo rem recusandae sit at earum atque temporibus pariatur quibusdam.',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        id: 1,
        text: 'comment',
        createdAt: new Date(Date.now()),
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.now()),
      },
    ],
  },
  {
    id: 2,
    name: 'Second',
    description: 'Second description',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod perferendis corrupti nostrum nisi, eum reprehenderit temporibus porro tempora repellat. Dolor nemo rem recusandae sit at earum atque temporibus pariatur quibusdam.',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [],
  },
];

@Injectable()
export class NewsService {
  async getNewsAll(): Promise<News[]> {
    return news;
  }

  async getNews(id: number): Promise<News> {
    return news[id];
  }

  async createNews(data: News): Promise<News> {
    news.push(data);
    return data;
  }

  async updateNews(data: News): Promise<string> {
    // const existingPost = news[data.id - 1];
    const n = news.findIndex((el) => el.id === data.id);

    if (n >= 0) {
      // if (existingPost) {
      news[n] = {
        ...news[n],
        ...data,
      };
    } else {
      throw new Error('News not exist');
    }

    return 'Successfully updated';
  }

  async deleteNews(id: number): Promise<News[]> {
    const n = news.findIndex((el) => el.id === id);
    if (n >= 0) return news.splice(n, 1);
    else throw new Error('News not found');
  }
}
