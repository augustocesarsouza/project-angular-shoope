import { shopeeUpdate } from "./shopee-update";
import { User } from "./user";

export interface ShopeeUpdateUser {
  id: string;
  shopeeUpdateId: string;
  shopeeUpdateDTO: shopeeUpdate | null;
  userId: string;
  userDTO: User | null;
}
