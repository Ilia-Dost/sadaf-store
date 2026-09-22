export interface Product {
  id: string;

  name: string;
  slug: string;

  categoryId: string;

  brandId: string;
  countryId: string;

  thumbnail: string;

  gallery: string[];

  shortDescription: string;
  description: string;

  sizes: ProductSize[];

  specifications: ProductSpecification[];

  features: string[];

  applications: string[];

  relatedProducts: string[];

  tags: string[];

  imagesAlt: string[];

  isFeatured: boolean;
  isNew: boolean;
}

export interface ProductSize {
  size: string;
  code: string;
}

export interface ProductSpecification {
  title: string;
  value: string;
}