import fs from "fs/promises";
import path from "path";

export async function crudFilesSolution(lipSumPath) {
  let homePath = "/home/harrish-easwar";

  await readFile(lipSumPath);
}

export async function readFile(lipSumPath) {
  try {
    await fs.readFile(lipSumPath, "utf-8");
  } catch (err) {
    console.log("Error:Could not read the directory", err);
    throw err;
  }
}
