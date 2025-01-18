export interface ProductDiscoveriesOfTheDay {
  id: string;
  title: string;
  imgProduct: string;
  imgPartBottom: string | null;
  discountPercentage: number | null;
  isAd: boolean;
  price: number;
  quantitySold: number | null;
}
