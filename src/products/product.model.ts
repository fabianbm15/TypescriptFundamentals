export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'; // Alias type
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}; // Alias type de Product
