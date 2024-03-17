import readDataSetResultBlock from "./readDataSetResultBlock";

export default function changeRound() {
  const currentRound: string = readDataSetResultBlock("currentRound");
  if (!currentRound)
    throw new Error("data attribute currentRound don't exist in result block");
  const currentLevel: string = readDataSetResultBlock("currentLevel");
  if (!currentLevel)
    throw new Error("data attribute currentRound don't exist in result block");
  // const levelNumber: number = Number(currentLevel);
  // import(`level${levelNumber}`)
  // if(Number(currentRound) + 1 >=  )
  const nextCurrentRound: number = Number(currentLevel) + 1;

  console.log(`next round:${nextCurrentRound}`);
}
