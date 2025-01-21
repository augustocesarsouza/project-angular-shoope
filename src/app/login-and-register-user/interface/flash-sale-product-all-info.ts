import { ProductFlashDeals } from "./product-flash-deals";

export interface FlashSaleProductAllInfo {
  id: string;
  productsOfferFlashId: string;
  productsOfferFlashDTO: ProductFlashDeals;
  productReviewsRate: number;
  quantitySold: number;
  favoriteQuantity: number;
  quantityEvaluation: number;
  coins: number;
  creditCard: string;
  voltage: string;
  quantityPiece: number;
  size: string;
  productHaveInsurance: boolean;
}
