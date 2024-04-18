import { User } from "./user";

export interface UserAuthReq {
  id: string;
  type: "USER_LOGIN";
  payload: {
    user: User;
  };
}

export interface UserAuthRes {
  id: string;
  type: "USER_LOGIN";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
