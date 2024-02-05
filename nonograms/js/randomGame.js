import { listNonograms } from "../assets/listNonograms.js";

export default function randomGame(current) {
  const randomFolderIndex = Math.floor(
    Math.random() * Object.keys(listNonograms).length
  );
  const folder = Object.keys(listNonograms)[randomFolderIndex];

  const randomNameIndex = Math.floor(
    Math.random() * listNonograms[folder].length
  );
  const nonogramName = listNonograms[folder][randomNameIndex];

  if (
    current &&
    current.folder === folder &&
    current.nonogramName === nonogramName
  )
    randomGame(current);

  return { folder, nonogramName };
}
