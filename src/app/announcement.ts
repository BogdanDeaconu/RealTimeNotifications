import { Category } from './category';

export interface Announcement {
  id: number;
  title: string;
  message: string;
  author: string;
  category: Category;
  imageUrl: string;
}
