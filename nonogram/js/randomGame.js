import { listNonograms } from "../assets/listNonograms.js";

export default function randomGame(current) {
  const randomFolderIndex = Math.floor(Math.random() * 3);
  const randomNameIndex = Math.floor(Math.random() * 5);

  const folder = Object.keys(listNonograms)[randomFolderIndex];

  const nonogramName = listNonograms[folder][randomNameIndex];
  if (
    current &&
    current.folder === folder &&
    current.nonogramName === nonogramName
  )
    randomGame(current);
  return { folder, nonogramName };
}
