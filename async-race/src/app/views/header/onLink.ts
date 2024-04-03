// import StoreCars from "../../store/cars";
import routeLinkAndPage from "../../utils/routeLinkAndPage";

export default function onLink(e: Event, name: string) {
  ["link", "page"].forEach((entity) => {
    // if (name === "winners") {
    //   StoreCars.controller.abort();
    //   StoreCars.controller = new AbortController();
    // }
    if (e.target) routeLinkAndPage(entity, name);
  });
}
