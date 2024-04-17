export interface GetAllAuthUsers {
  id: string;
  type: "USER_ACTIVE";
  payload: null;
}
export interface ResponseAllAuthUsers {
  id: string;
  type: "USER_ACTIVE";
  payload: {
    users: [];
  };
}

export interface GethAllUnautUsers {
  id: string;
  type: "USER_INACTIVE";
  payload: null;
}
export interface ResponseAllUnauthUsers {
  id: string;
  type: "USER_INACTIVE";
  payload: {
    users: [];
  };
}
