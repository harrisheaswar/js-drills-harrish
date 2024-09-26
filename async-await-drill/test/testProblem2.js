import {
  readFile,
  toUpperCaseAndWrite,
  createFiles,
  saveTextFileName,
  toLowerCaseAndWrite,
  sortTextAndWrite,
  deleteRecentFiles,
  crudFilesSolution,
} from "../problem2.js";

// test with path to lipsum.txt
let lipSumPath = "/home/harrish-easwar/lipsum.txt";
crudFilesSolution(
  lipSumPath,
  readFile,
  toUpperCaseAndWrite,
  createFiles,
  saveTextFileName,
  toLowerCaseAndWrite,
  sortTextAndWrite,
  deleteRecentFiles
);
