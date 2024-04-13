import { User } from '../../interfaces/user';

export default function isValidUser(user: User | object): user is User {
  return 'name' in user && 'password' in user;
}
