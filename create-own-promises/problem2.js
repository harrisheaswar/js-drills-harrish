import fs from "fs";
import path from "path";

export function solution(
  lipsumPath,
  toUpperCaseAndWrite,
  createFile,
  saveFileNameToFile,
  toLowerCaseAndWrite,
  sortText,
  deleteRecentFiles
) {
  let homePath = "/home/harrish-easwar/";

  const readFilePromise = readFile(lipsumPath);
  //kept the code modular and created functions for each file-action
  readFilePromise
    .then((textFile) => {
      return toUpperCaseAndWrite(textFile, homePath);
    })
    .then((arr) => {
      return createFile(arr);
    })
    .then((arr) => {
      return saveFileNameToFile(arr);
    })
    .then((arr) => {
      return toLowerCaseAndWrite(arr);
    })
    .then((arr) => {
      return saveFileNameToFile(arr);
    })
    .then((arr) => {
      return sortText(arr);
    })
    .then((arr) => {
      return saveFileNameToFile(arr);
    })
    .then((arr) => {
      return deleteRecentFiles(arr, homePath);
    })
    .catch((err) => {
      console.log("Error in executing program", err);
    });

  return readFilePromise;
}

//------------------------------------------------------------------//

// function to read the lipsum file
export function readFile(lipsumPath) {
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(lipsumPath, "utf-8", (err, fileText) => {
      if (err) {
        console.log("Error, cannot read file: ", err);
        reject(err);
      } else {
        console.log("Successfully read lipsum.txt");
        resolve(fileText);
      }
    });
  });

  return readFilePromise;
}

// function to convert to upper-case
export function toUpperCaseAndWrite(textFile, homePath) {
  let upperText = textFile.toUpperCase().trim();
  let fileName = "upper-case.txt";
  let fullPath = path.join(homePath, fileName);

  const promise = new Promise((resolve, reject) => {
    fs.writeFile(fullPath, upperText, "utf-8", (err) => {
      if (err) {
        console.log("Could not create uppercase.txt file");
        reject(err);
      } else {
        console.log(`Created file: ${fileName}`);
        resolve([fileName, upperText, homePath]);
      }
    });
  });
  return promise;
}

// to create fileName.txt
export function createFile(arr) {
  let path = "/home/harrish-easwar/fileName.txt";
  arr.push(path);
  arr.push(new Set());
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(path, "", "utf-8", (err) => {
      if (err) {
        console.log("Error could not create fileName.txt", err);
        reject(err);
      } else {
        console.log("Created fileName.txt file");
        resolve(arr);
      }
    });
  });

  return promise;
}

//save all file names here
export function saveFileNameToFile(arr) {
  let fileName = arr[0];
  let path = arr[3];

  arr[4].add(fileName);

  const promise = new Promise((resolve, reject) => {
    fs.appendFile(path, fileName + "\n", "utf-8", (err) => {
      if (err) {
        console.log(`${fileName} could not be saved`);
        reject(err);
      } else {
        console.log(`${fileName} file name was saved`);
        resolve(arr);
      }
    });
  });

  return promise;
}

//convert file text to lowercase and write to new path
export function toLowerCaseAndWrite(arr) {
  let upperCase = arr[1];
  let lowerCase = upperCase.toLowerCase().trim().split(".").join("\n");
  let fileName = "lower-case.txt";
  let fullPath = path.join(arr[2], fileName);
  arr[0] = fileName;
  arr[1] = lowerCase;
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(fullPath, lowerCase, "utf-8", (err) => {
      if (err) {
        console.log("Error: creating lowercase.txt file", err);
        reject(err);
      } else {
        console.log("Successfully saved the file");
        resolve(arr);
      }
    });
  });

  return promise;
}

// sort the text and then write to new path
export function sortText(arr) {
  let lowerCase = arr[1];
  let sorted = lowerCase.split("\n").sort().join("\n");
  let fileName = "sorted-case.txt";
  let fullPath = path.join(arr[2], fileName);
  arr[0] = fileName;
  arr[1] = sorted;
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(fullPath, sorted, "utf-8", (err) => {
      if (err) {
        console.log(`Error in creating: ${fileName}`);
        reject(err);
      } else {
        console.log("Sorted text was saved");
        resolve(arr);
      }
    });
  });

  return promise;
}

//delete all recent files
export function deleteRecentFiles(arr, homePath) {
  let set = arr[4];
  let file = arr[3];

  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, listText) => {
      if (err) {
        console.log(`Error: could not read ${file}`, err);
        reject(err);
      } else {
        console.log("Successfully read the file with path: ", file);
        arr.push(listText);
        resolve(arr);
      }
    });
  });

  promise.then((arr) => {
    let modifiedStr = arr[5]
      .split("\n")
      .filter((ele) => !set.has(ele))
      .join("\n");

    return new Promise((resolve, reject) => {
      fs.writeFile(arr[3], modifiedStr, "utf-8", (err) => {
        if (err) {
          console.log("Error: could not update fileName.txt", err);
          reject(err);
        } else {
          console.log("Successfully updated fileName.txt");
          resolve(arr);
        }
      });
    })
      .then((arr) => {
        let promiseArr = [];
        set.forEach((ele) => {
          let deletePath = path.join(homePath, ele);
          const promise = new Promise((resolve, reject) => {
            fs.unlink(deletePath, (err) => {
              if (err) {
                console.log("Could not unlink", err);
                reject(err);
              } else {
                console.log("Successfully deleted file: ", ele);
                resolve();
              }
            });
          });

          promiseArr.push(promise);
        });

        return Promise.all(promiseArr);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });

  return promise;
}
