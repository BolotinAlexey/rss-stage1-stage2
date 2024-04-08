import routeLinkAndPage from "../../utils/routeLinkAndPage";

export default function onLink(e: Event, name: string) {
  ["link", "page"].forEach((entity) => {
    if (e.target) routeLinkAndPage(entity, name);
  });
}
