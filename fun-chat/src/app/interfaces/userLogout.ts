import { User } from "./user";

export interface UserLogout {
  id: string;
  type: "USER_LOGOUT";
  payload: {
    user: User;
  };
}

export interface UserResponseLogout {
  id: string;
  type: "USER_LOGOUT";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface UserResponseLogoutError {
  id: string;
  type: "ERROR";
  payload: {
    error:
      | "incorrect password"
      | "there is no user with this login"
      | "the user was not authorized"
      | "a user with this login is already authorized";
  };
}
