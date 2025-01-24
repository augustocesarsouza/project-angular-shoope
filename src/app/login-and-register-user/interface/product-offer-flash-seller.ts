import { UserSellerProduct } from "./user-seller-product";

export interface ProductOfferFlashSeller {
  id: string;
  userSellerProductId: string;
  userSellerProductDTO: UserSellerProduct;
  productsOfferFlashId: string;
}
