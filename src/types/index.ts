export interface SpecialDay {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Message {
  id: number;
  content: string;
  author: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  date: string;
}