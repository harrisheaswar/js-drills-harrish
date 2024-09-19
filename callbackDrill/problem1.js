import fs from "fs";

export function createFiles(input = 4) {
  let dir = "/home/harrish-easwar/problem1";
  let fileSet = new Set();
  let count = 0;
  //create directory
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log("Error in making directory");
    }
    console.log("Successfully created directory");

    //iterate and create each file
    for (let index = 0; index < input; index++) {
      const fileName = `/${index}-file.json`;
      const path = dir + fileName;

      const jsonRes = JSON.stringify({
        idx: `${index}`,
        val: `${index}-file.json`,
      });

      fs.writeFile(path, jsonRes, (err) => {
        if (err) {
          console.log("Error in creating file");
        }

        fileSet.add(path);
        console.log(`Successfully created file: ${index}-file.json`);
        count++;

        if (count === input) {
          deleteFiles(fileSet, dir);
        }
      });
    }
  });
}

export function deleteFiles(fileSet = new Set(), dir) {
  if (fileSet.size === 0) {
    console.log("No files to delete");
  }

  fs.readdir(dir, (err, fileList) => {
    if (err) {
      console.log("error");
    }

    fileList.forEach((file) => {
      let path = dir + `/${file}`;
      if (fileSet.has(path)) {
        fs.unlink(path, (err) => {
          if (err) {
            console.log(`Error in deleting file with path : ${file}`);
          }

          console.log(`Successfully deleted the file: ${file}`);
        });
      } else {
        console.log("No such file exists");
      }
    });
  });
}
