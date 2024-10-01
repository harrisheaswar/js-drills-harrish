import fs from "fs/promises";
import os from "os";
import path from "path";

export function crudSolution(
  lipsum = "lipsum.txt",
  upperCaseFile = "upper-case.txt",
  lowerCaseFile = "lower-case.txt",
  sortedName = "sorted-txt",
  fileName = "fileName.txt"
) {
  let homeDir = os.homedir();
  let fileMap = new Map(); //map filename to filepath
  let storagePath = path.join(homeDir, fileName); // path to fileName.txt which stores file names

  //read lipsum.txt
  const lipsumText = readFile(homeDir, lipsum);

  return lipsumText
    .then((lipsumText) => {
      //create the filePath for uppercase text and map filename to path. Next converted text to uppercase and wrote to file
      const upperCaseFilePath = path.join(homeDir, upperCaseFile);
      fileMap.set(upperCaseFile, upperCaseFilePath);
      return toUpperCaseAndWrite(lipsumText, upperCaseFilePath);
    })
    .then((upperCaseText) => {
      //create the fileName.txt file to save filenames
      return createOrOverwriteFile(storagePath, "", upperCaseText);
    })
    .then((upperCaseText) => {
      //save the uppercase filename
      return saveFileName(storagePath, upperCaseFile, upperCaseText);
    })
    .then((upperCaseText) => {
      //convert upper case to lowercase and write
      const lowerCaseFilePath = path.join(homeDir, lowerCaseFile);
      fileMap.set(lowerCaseFile, lowerCaseFilePath);
      return toLowerCaseAndWrite(upperCaseText, lowerCaseFilePath);
    })
    .then((lowerCaseText) => {
      return saveFileName(storagePath, lowerCaseFile, lowerCaseText);
    })
    .then((lowerCaseText) => {
      //create the sortedfile path and map to filename
      const sortedPath = path.join(homeDir, sortedName);
      fileMap.set(sortedName, sortedPath);
      return sortTextAndWrite(lowerCaseText, sortedPath);
    })
    .then(() => {
      return saveFileName(storagePath, sortedName);
    })
    .then(() => {
      //delete all the recent files. Here the fileMap acts as a cache for deleting recent files
      return deleteRecentFiles(storagePath, fileMap);
    })
    .then((updatedStr) => {
      //Overriding the text for fileName.txt after reomving recent files
      return createOrOverwriteFile(storagePath, updatedStr);
    })
    .then(() => {
      console.log("All tasks completed");
    })
    .catch((err) => {
      console.log("Error: Could not complete all tasks", err);
      return err;
    });
}

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

// FUnction to readfiles
export function readFile(homeDir, lipsum) {
  let lipsumPath = path.join(homeDir, lipsum);
  let lipsumText = fs.readFile(lipsumPath, "utf-8");

  return lipsumText;
}

//Function to convert to uppercase and write
export function toUpperCaseAndWrite(lipsumText, upperCaseFilePath) {
  let upperCaseText = lipsumText.toUpperCase().trim();

  return fs
    .writeFile(upperCaseFilePath, upperCaseText)
    .then(() => {
      console.log("Success: Created file with path: ", upperCaseFilePath);
      return upperCaseText;
    })
    .catch((err) => {
      console.log("Error:Could not create file with path: ", upperCaseFilePath);
      return err;
    });
}

//create or override a file
export function createOrOverwriteFile(
  storagePath,
  content = "",
  upperCaseText
) {
  return fs
    .writeFile(storagePath, content)
    .then(() => {
      console.log("Success: created/overrided file name: ", storagePath);
      return upperCaseText;
    })
    .catch((err) => {
      console.log("Error: Could not create/override file: ", storagePath);
      return err;
    });
}

//save the file name into fileName.txt
export function saveFileName(storagePath, fileName, upperCaseText = "") {
  return fs
    .appendFile(storagePath, fileName + "\n")
    .then(() => {
      console.log("Success: Appended file name: ", fileName);
      if (upperCaseText) return upperCaseText;
    })
    .catch((err) => {
      console.log("Could not append fileName: ", fileName);
      return err;
    });
}

//function to convert to lowercase and write
export function toLowerCaseAndWrite(upperCaseText, lowerCaseFilePath) {
  let lowerCaseText = upperCaseText.split(".").join("\n").toLowerCase().trim();

  return fs
    .writeFile(lowerCaseFilePath, lowerCaseText)
    .then(() => {
      console.log("Sucess: Created file: ", lowerCaseFilePath);
      return lowerCaseText;
    })
    .catch((err) => {
      console.log("Could not save fileName: ", lowerCaseFilePath);
      return err;
    });
}

// function to sort and write
export function sortTextAndWrite(lowerCaseText, sortedPath) {
  let sortedText = lowerCaseText.split("\n").sort().join("\n");

  return fs
    .writeFile(sortedPath, sortedText)
    .then(() => {
      console.log("Success: Created file: ", sortedPath);
    })
    .catch((err) => {
      console.log("Error: COuld not create file with path: ", sortedPath);
      return err;
    });
}

// function to delete recent files
export function deleteRecentFiles(storagePath, fileMap) {
  return fs
    .readFile(storagePath, "utf-8")
    .then((fileNames) => {
      return fileNames.split("\n");
    })
    .then((fileArr) => {
      let promiseArr = [];
      let updatedStr = "";
      fileArr.forEach((file) => {
        if (fileMap.has(file)) {
          const promise = fs.unlink(fileMap.get(file));
          promiseArr.push(promise);
        } else {
          updatedStr += file + "\n";
        }
      });

      return Promise.all(promiseArr).then(() => updatedStr);
    })
    .then((updatedStr) => {
      console.log("Successfully deleted all the recent files");
      return updatedStr;
    })
    .catch((err) => {
      console.log("Error: Could not read file or delete files", err);
      return err;
    });
}
