import { User } from "./user";

export interface UserLogin {
  passwordIsCorrect: boolean;
  userDTO: User;
  message: string;
}
