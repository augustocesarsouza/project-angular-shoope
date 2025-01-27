import { User } from "./user";

export interface ProductFlashSaleReview {
  id: string;
  message: string;
  creationDate: string;
  costBenefit: string;
  similarToAd: string;
  starQuantity: number;
  productsOfferFlashId: string;
  userId: string;
  userDTO: User;
  imgAndVideoReviewsProduct: string[];
  variation: string;
}
