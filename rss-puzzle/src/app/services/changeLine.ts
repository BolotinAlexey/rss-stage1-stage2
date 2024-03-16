export default function changeLine(resultBlock: HTMLElement) {
  const currentLine: string | undefined = resultBlock.dataset?.currentLine;
  if (!currentLine)
    throw new Error("data attribute line don't exist in result block");

  console.log(currentLine);
}
