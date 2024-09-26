import fs from "fs/promises";
import path from "path";

export async function createAndDelete(
  input = 5,
  createDir,
  createFiles,
  deleteFiles,
  dirName = "test"
) {
  const homePath = "/home/harrish-easwar";

  const dirPath = await createDir(dirName, homePath);

  const fileNameSet = await createFiles(dirPath, input);

  await deleteFiles(fileNameSet, dirPath);

  console.log("All files were deleted");
}

//create directory function
export async function createDir(dirName, homePath) {
  let dirPath = path.join(homePath, dirName);
  try {
    await fs.mkdir(dirPath);
    console.log("Successfully created directory");
    return dirPath;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

//create files function
export async function createFiles(dirPath, input) {
  let set = new Set();
  for (let index = 0; index < input; index++) {
    let fileName = `${index}-file.json`;
    let filePath = path.join(dirPath, fileName);

    let json = {
      id: index,
      value: fileName,
    };
    try {
      await fs.writeFile(filePath, JSON.stringify(json), "utf-8");
      console.log(`Created file: ${fileName}`);
      set.add(fileName);
    } catch (err) {
      console.log(`Error: Could not create file: ${fileName}`);
    }
  }

  return set;
}

//delete files function
export async function deleteFiles(fileNameSet, dirPath) {
  try {
    const fileList = await fs.readdir(dirPath, "utf-8");

    for (let file of fileList) {
      if (fileNameSet.has(file)) {
        try {
          let filePath = path.join(dirPath, file);
          await fs.unlink(filePath);
          console.log("Successfully deleted the file", file);
        } catch (err) {
          console.log(`Error could not delete the file ${file}`);
        }
      }
    }
  } catch (err) {
    console.log("Could not read directory", err);
    throw err;
  }
}
