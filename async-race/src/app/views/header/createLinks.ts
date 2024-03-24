import Link from "../../components/link/link";
import onLink from "./onLink";

export default function createLinks(nav: HTMLElement) {
  const links: HTMLElement[] = ["garage", "winners"].map(
    (name: string, i: number) => {
      const link = new Link(`link__${name}`, `to ${name.toUpperCase()}`, (e) =>
        onLink(e, name),
      );
      if (!i) link.getHTMLElement().classList.add("active-link");
      nav.append(link.getHTMLElement());
      return link.getHTMLElement();
    },
  );
  return links;
}
