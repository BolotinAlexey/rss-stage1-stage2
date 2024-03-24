export default interface IPage {
  namePage: "garage" | "winners";
  count: number;
  num: number;
  getHTMLElement: () => HTMLElement;
}
