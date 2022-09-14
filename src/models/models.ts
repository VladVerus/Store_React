 interface ProductItem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}


export type IProductItem = Partial<ProductItem>;