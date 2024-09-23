const { default: fs } = await import("fs/promises");

export function readFileAndSolve(
  convertToUpperCaseAndWrite,
  convertToLowerCaseAndWrite,
  sortTextAndWrite,
  deleteRecent
) {
  let filePath = "/home/harrish-easwar/lipsum.txt";
  let homeDir = "/home/harrish-easwar";
  let newFilePath = "/home/harrish-easwar/fileName.txt";
  let newFileSet = new Set();
  //Read file lipsum.txt
  const readFile = fs.readFile(filePath, "utf-8").catch((err) => {
    console.log(`Error:Could not read file`, err);
    return err;
  });

  //from previous promise convert text to uppercase and return another promise
  const upperCaseWritePath = readFile
    .then((text) => {
      return convertToUpperCaseAndWrite(text, homeDir);
    })
    .then((pathName) => {
      newFileSet.add(pathName);
      let upperCasePath = homeDir + "/" + pathName;
      const promise = fs
        .writeFile(newFilePath, pathName + "\n", "utf-8")
        .then(() => {
          console.log(`fileName.txt file created`);
          return upperCasePath;
        })
        .catch(() => {
          console.log("Error in creating file name fileName.txt");
          return err;
        });

      return promise;
    })
    .catch((err) => {
      console.log(
        "Could not convert to upper case and write to a new file",
        err
      );
      return err;
    });

  //convert the text to lowercase and split into sentences and write to a new file
  const toLowerCaseAndSplit = upperCaseWritePath.then((upperCasePath) => {
    const promiseOuter = fs
      .readFile(upperCasePath, "utf-8")
      .then((upperCaseText) => {
        return convertToLowerCaseAndWrite(upperCaseText, homeDir);
      })
      .then((pathName) => {
        newFileSet.add(pathName);
        const promiseInner = fs
          .appendFile(newFilePath, pathName + "\n", "utf-8")
          .then(() => {
            let lowerCasePath = homeDir + "/" + pathName;
            return lowerCasePath;
          })
          .catch((err) => {
            console.log("Could not convert text to lowercase and split", err);
            return err;
          });
        return promiseInner;
      });
    return promiseOuter;
  });

  //from the previous step, sort the text and store in another file
  const sortText = toLowerCaseAndSplit.then((lowerCasePath) => {
    const promiseOuter = fs
      .readFile(lowerCasePath, "utf-8")
      .then((lowerCaseText) => {
        return sortTextAndWrite(lowerCaseText, homeDir);
      })
      .then((sortedPath) => {
        newFileSet.add(sortedPath);
        const promiseInner = fs
          .appendFile(newFilePath, sortedPath + "\n", "utf-8")
          .then(() => {
            let lowerCasePath = homeDir + "/" + sortedPath;
            return lowerCasePath;
          })
          .catch((err) => {
            console.log("Could not convert text to lowercase and split", err);
            return err;
          });
        return promiseInner;
      })
      .catch((err) => {
        console.log("Error: Could not sort the text", err);
        return err;
      });

    return promiseOuter;
  });

  //delete all the new files
  const deletedRecentFiles = sortText.then(() => {
    return deleteRecent(newFilePath, homeDir, newFileSet);
  });
}

//function to convert to uppercase and write
export function convertToUpperCaseAndWrite(text, homeDir) {
  let upperCaseText = text.toUpperCase();
  let pathName = "upper-case-text.txt";
  let newPath = homeDir + "/" + "upper-case-text.txt";

  const newPromise = fs
    .writeFile(newPath, upperCaseText, "utf-8")
    .then(() => {
      return pathName;
    })
    .catch((err) => {
      console.log("Could not write the path", err);
      return err;
    });

  return newPromise;
}
//convert to lowercase and write
export function convertToLowerCaseAndWrite(text, homeDir) {
  let lowerCaseText = text.toLowerCase().trim();
  let pathName = "lower-case-text.txt";
  let newPath = homeDir + "/" + pathName;

  let splitText = lowerCaseText.split(".").join("\n");
  const newPromise = fs
    .writeFile(newPath, splitText, "utf-8")
    .then(() => {
      return pathName;
    })
    .catch((err) => {
      console.log("Could not write the path", err);
      return err;
    });

  return newPromise;
}

//sort and write
export function sortTextAndWrite(text, homeDir) {
  let sortedText = text.split("\n").sort().join("\n").trim();
  let pathName = "sorted-text.txt";
  let newPath = homeDir + "/" + pathName;

  const newPromise = fs
    .writeFile(newPath, sortedText, "utf-8")
    .then(() => {
      return pathName;
    })
    .catch((err) => {
      console.log("Could not write the path", err);
      return err;
    });

  return newPromise;
}

//function to delete recent files
export function deleteRecent(newPath, homeDir, set) {
  const promise = fs
    .readFile(newPath, "utf-8")
    .then((fileName) => {
      let fileNamesArr = fileName.split("\n");
      let modifiedArr = [];
      let promiseArr = [];
      fileNamesArr.forEach((name) => {
        if (set.has(name)) {
          let delPath = homeDir + "/" + name;

          const promise = fs.unlink(delPath).catch((err) => {
            console.log("Error: Could not delete the path", err);
          });
          promiseArr.push(promise);
        } else {
          modifiedArr.push(name);
        }
      });
      return Promise.all(promiseArr).then(() => {
        let modifiedText = modifiedArr.join("\n");
        return fs.writeFile(newPath, modifiedText, "utf-8").then(() => {
          console.log("successfully deleted the files");
        });
      });
    })
    .catch((err) => {
      console.log("Files could not be deleted");
    });

  return promise;
}
