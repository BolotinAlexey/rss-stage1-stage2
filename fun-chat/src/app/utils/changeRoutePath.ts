import SessionStorageAPI from "../services/sessionStorageApi";

export default function changeRoutePath(): string {
  const user = SessionStorageAPI.getUser;
  return !user ? "/auth" : "/chat";
}
