import {
  toUpperCaseAndWrite,
  createFile,
  saveFileNameToFile,
  toLowerCaseAndWrite,
  sortText,
  deleteRecentFiles,
  solution,
} from "../problem2.js";

let lipsumPath = "/home/harrish-easwar/lipsum.txt";

solution(
  lipsumPath,
  toUpperCaseAndWrite,
  createFile,
  saveFileNameToFile,
  toLowerCaseAndWrite,
  sortText,
  deleteRecentFiles
);
