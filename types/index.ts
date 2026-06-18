export interface Product {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  long_description: string;
  image: string;
  features: string[];
  category?: string;
}
