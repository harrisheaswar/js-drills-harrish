import fs from "fs/promises";
import path from "path";

//-----------------------solution starts here----------------------------------//

export async function crudFilesSolution(
  lipSumPath = "/home/harrish-easwar/lipsum.txt",
  readFile,
  toUpperCaseAndWrite,
  createFiles,
  saveTextFileName,
  toLowerCaseAndWrite,
  sortTextAndWrite,
  deleteRecentFiles
) {
  let homePath = "/home/harrish-easwar";
  // using map to store the filename and its path which can be used when deleting the files
  let map = new Map();

  const textFile = await readFile(lipSumPath);

  const fileInfoArr = await toUpperCaseAndWrite(textFile, homePath, map);
  const fileNamePath = await createFiles(homePath);
  await saveTextFileName(fileInfoArr, fileNamePath, map);

  await toLowerCaseAndWrite(fileInfoArr, homePath);
  await saveTextFileName(fileInfoArr, fileNamePath, map);

  await sortTextAndWrite(fileInfoArr, homePath);
  await saveTextFileName(fileInfoArr, fileNamePath, map);

  await deleteRecentFiles(fileNamePath, map);

  console.log("All tasks successfully complete!");
}

//----------------------solution ends here---------------------------//

// function to read lipsum.txt
export async function readFile(lipSumPath) {
  try {
    const textFile = await fs.readFile(lipSumPath, "utf-8");
    console.log("Successfully read lipsum.txt file");
    return textFile;
  } catch (err) {
    console.log("Error:Could not read the directory", err);
    throw err;
  }
}

// function to convert to uppercase
export async function toUpperCaseAndWrite(textFile, homePath) {
  let upperCaseText = textFile.toUpperCase().trim();
  let fileName = "upper-case.txt";
  let filePath = path.join(homePath, fileName);

  try {
    await fs.writeFile(filePath, upperCaseText);
    console.log("Successfully created the upper-case.txt file");
    return [fileName, upperCaseText, filePath];
  } catch (err) {
    console.log("could not create uppercase.txt file", err);
    throw err;
  }
}

// function create file fileName.txt
export async function createFiles(homePath) {
  let filePath = path.join(homePath, "file-name.txt");

  try {
    await fs.writeFile(filePath, "");
    console.log("Created file: file-name.txt");
    return filePath;
  } catch (err) {
    console.log("Could not create filename.txt file", err);
    throw err;
  }
}

// function to save new fileNames to fileName.txt
export async function saveTextFileName(fileInfoArr, fileNamePath, map) {
  try {
    await fs.appendFile(fileNamePath, fileInfoArr[0] + "\n", "utf-8");
    map.set(fileInfoArr[0], fileInfoArr[2]);

    console.log("File name saved in fileName.txt, file: ", fileInfoArr[0]);
  } catch (err) {
    console.log(
      "Error: Cannot save filename in fileName.txt, file: ",
      fileInfoArr[0]
    );
    throw err;
  }
}

// function to convert to lowercase
export async function toLowerCaseAndWrite(fileInfoArr, homePath) {
  let lowerCaseText = fileInfoArr[1].split(".").join("\n").toLowerCase().trim();
  let fileName = "lower-case.txt";
  let filePath = path.join(homePath, fileName);

  try {
    await fs.writeFile(filePath, lowerCaseText);
    fileInfoArr[0] = fileName;
    fileInfoArr[1] = lowerCaseText;
    fileInfoArr[2] = filePath;
    console.log("Successfully created the lower-case.txt file");

    return lowerCaseText;
  } catch (err) {
    console.log("could not create lower-case.txt file", err);
    throw err;
  }
}

// function to sort and write
export async function sortTextAndWrite(fileInfoArr, homePath) {
  let sortedText = fileInfoArr[1].split("\n").sort().join("\n");
  let fileName = "sorted.txt";
  let filePath = path.join(homePath, fileName);

  try {
    await fs.writeFile(filePath, sortedText);
    fileInfoArr[0] = fileName;
    fileInfoArr[1] = sortedText;
    fileInfoArr[2] = filePath;
    console.log("Successfully created the sorted.txt file");

    return sortedText;
  } catch (err) {
    console.log("could not create sort.txt file", err);
    throw err;
  }
}

// function to delete the recent files and also update fileName.txt
export async function deleteRecentFiles(fileNamePath, map) {
  let fileList = (await fs.readFile(fileNamePath, "utf-8")).split("\n");
  let newStr = "";

  for (let name of fileList) {
    if (map.has(name)) {
      try {
        await fs.unlink(map.get(name));

        console.log("Successfully deleted file with name", name);
      } catch (err) {
        console.log("Error: could not delete the file", name);
      }
    } else {
      newStr += name + "\n";
    }
  }

  //update contents of fileName.txt

  try {
    await fs.writeFile(fileNamePath, newStr, "utf-8");
    console.log("Successfuly updated fileName.txt");
  } catch (err) {
    console.log("Error: Could not update fileName.txt", err);
  }
}
