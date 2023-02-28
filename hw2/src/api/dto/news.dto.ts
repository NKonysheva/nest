import { Comment } from './comment.dto';

export class News {
  id!: number;

  name!: string;

  createdAt!: Date;

  updatedAt!: Date;

  description!: string;

  text!: string;

  comments!: Comment[];
}
