export type ProductType = {
  product_id: string;
  name: string;
  price: number;
  category?: string;
  owner: string;
  quantity: number;
  description: string;
  image: any;
  image_url: string;
  cloudinary_id: string;
};

export type UpdateProductType = {
  id: string;
  updateBody: Partial<ProductType>;
};
