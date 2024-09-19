import fs from "fs";

export function readAndManipulateFile() {
  let path = "/home/harrish-easwar/lipsum.txt";
  let parentPath = "/home/harrish-easwar/";
  let fileSet = new Set();
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log("Could not read the file");
      return;
    }

    let textJson = data.toUpperCase();
    let fileName = "toUpperCase.txt";
    let newPath = parentPath + `${fileName}`;

    fs.writeFile(newPath, textJson, (err) => {
      if (err) {
        console.log("Error: Could not write to new path");
        return;
      }
      let newFileName = fileName;
      let writePath = parentPath + `fileName.txt`;

      fs.appendFile(writePath, newFileName + "\n", (err) => {
        if (err) {
          console.log("Error in writing file to fileName.txt");
          return;
        } else {
          fileSet.add(fileName);
          console.log("File name successfully saved");
        }
      });
      console.log(`Successfully written file to path: ${newPath}`);

      fs.readFile(newPath, "utf-8", (err, newData) => {
        if (err) {
          console.log("Could not read the file");
          return;
        }

        let lowerCaseText = newData.toLowerCase();

        let lowerCaseAndSplit = JSON.stringify(lowerCaseText.split("."));
        let fileName2 = "lowerCaseAndSplit.txt";
        let path3 = parentPath + `${fileName2}`;

        fs.writeFile(path3, lowerCaseAndSplit, (err) => {
          if (err) {
            console.log(`Error in writing the data: ${fileName2}`);
            return;
          }

          fs.appendFile(writePath, fileName2 + "\n", (err) => {
            if (err) {
              console.log("Error in writing file to fileName.txt");
              return;
            } else {
              fileSet.add(fileName2);
              console.log("File name successfully saved");
            }
          });

          fs.readFile(path3, "utf-8", (err, lowerCaseAndSplitData) => {
            if (err) {
              console.log(`Error reading file ${fileName2}`);
            }

            console.log("Read is a success");

            let file3Arr = JSON.parse(lowerCaseAndSplitData).sort();
            let file3 = JSON.stringify(file3Arr);
            let newSortedFile = "sorted.txt";
            let newPath2 = parentPath + `${newSortedFile}`;
            fs.writeFile(newPath2, file3, (err) => {
              if (err) {
                console.log(`Error writing for file ${newSortedFile}`);
                return;
              }

              fs.appendFile(writePath, newSortedFile, (err) => {
                if (err) {
                  console.log("Error in writing file to fileName.txt");
                } else {
                  fileSet.add(newSortedFile);
                  console.log("File name successfully saved");
                }
              });

              readAndDelete(fileSet, writePath, parentPath);
            });
          });
        });
      });
    });
  });
}

function readAndDelete(set, writePath, parentPath) {
  fs.readFile(writePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    let fileArr = data.trim().split("\n");
    let str = "";
    for (let index = 0; index < fileArr.length; index++) {
      if (set.has(fileArr[index])) {
        let reqPath = parentPath + fileArr[index];
        fs.unlink(reqPath, (err) => {
          if (err) {
            console.log("Error! file not deleted");
            return;
          }
        });
      } else {
        str += fileArr[index] + "\n";
      }
    }

    fs.writeFile(writePath, str, (err) => {
      if (err) {
        console.log("Error in writing the path");
        return;
      }
      console.log("File modified");
    });
  });
}
