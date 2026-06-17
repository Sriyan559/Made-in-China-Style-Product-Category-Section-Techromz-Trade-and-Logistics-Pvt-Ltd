export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits?: string[];
}
