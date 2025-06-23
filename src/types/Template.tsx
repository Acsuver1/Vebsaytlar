export interface Template {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  downloadCount: number;
  version: string;
}

export interface CartItem extends Template {
  quantity: number;
}