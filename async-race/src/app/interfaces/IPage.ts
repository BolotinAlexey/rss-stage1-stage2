export default interface IPage {
  namePage: "garage" | "winners";
  count: number;
  getHTMLElement: () => HTMLElement;
}
