import onLocation from "../components/router/onLocation";
import SessionStorageAPI from "../services/sessionStorageApi";

export default function errorHandler(err: string) {
  switch (err) {
    case "a user with this login is already authorized":
      SessionStorageAPI.removeUser();
      break;

    case "incorrect password":
      SessionStorageAPI.removeUser();
      break;

    case "the user was not authorized":
      SessionStorageAPI.removeUser();
      break;

    case "user not registered or not logged":
      SessionStorageAPI.removeUser();
      onLocation();
      break;

    default:
      break;
  }
}
