export interface ThirdPartyAuth {
  id: null;
  type: "USER_EXTERNAL_LOGIN";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface ThirdPartyLogout {
  id: null;
  type: "USER_EXTERNAL_LOGOUT";
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
