import { User } from "../../interfaces/user";

export default function isValidUser(user: User | object): user is User {
  return "login" in user && "password" in user;
}
