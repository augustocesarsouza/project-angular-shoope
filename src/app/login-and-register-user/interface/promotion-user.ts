import { Promotion } from "./promotion";
import { User } from "./user";

export interface PromotionUser {
  id: string;
  promotionId: string;
  promotionDTO: Promotion | null;
  userId: string;
  userDTO: User | null;
}
