import { Cupon } from "./cupon";
import { User } from "./user";

export interface UserCupon {
  id: string;
  userId: string;
  userDTO: User;
  cuponId: string;
  cuponDTO: Cupon;
}
