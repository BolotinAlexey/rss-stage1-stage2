import { User } from "./user";

export interface UserLogoutReq {
  id: string;
  type: "USER_LOGOUT";
  payload: {
    user: User;
  };
}

export interface UserLogoutRes {
  id: string;
  type: "USER_LOGOUT";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
