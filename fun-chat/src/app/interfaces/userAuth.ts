import { User } from "./user";

export interface UserAuth {
  id: string;
  type: "USER_LOGIN";
  payload: {
    user: User;
  };
}

export interface UserAuthResponse {
  id: string;
  type: "USER_LOGIN";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface UserAuthResponseError {
  id: string;
  type: "ERROR";
  payload: {
    error:
      | "incorrect password"
      | "a user with this login is already authorized";
  };
}
