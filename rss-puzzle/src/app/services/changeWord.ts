export default function changeWord(resultBlock: HTMLElement) {
  const currentWordIndex: string | undefined =
    resultBlock.dataset?.currentWordIndex;
  if (!currentWordIndex)
    throw new Error(
      "data attribute currentWordIndex don't exist in result block",
    );

  console.log(currentWordIndex);
}
