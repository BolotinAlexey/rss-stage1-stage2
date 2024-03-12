import { User } from "../interfaces/index";

export default function isValidUser(user: User | {}): user is User {
  return "name" in user && "surname" in user;
}
