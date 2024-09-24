import fs from "fs";
//the function takes a number to create and delete those files
export function createAndDeleteFiles(input = 5) {
  let path = "/home/harrish-easwar/test";
  //create a directory
  const createDirPromise = new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) {
        console.log("Error: Could not make directory");
        reject(err);
      }

      resolve("Successfully created directory");
    });
  });
  //Once directory is created then create the files inside the dir
  createDirPromise
    .then(() => {
      let promiseArr = [];
      for (let index = 0; index < input; index++) {
        let homePath = "/home/harrish-easwar/test";
        let fileName = `${index}-file.json`;
        let filePath = homePath + "/" + fileName;
        let json = {
          id: index,
          value: Math.random(),
        };
        const promise = new Promise((resolve, reject) => {
          fs.writeFile(filePath, JSON.stringify(json), "utf-8", (err) => {
            if (err) {
              console.log("Error: Could not create this file", err);
              reject(err);
            }
            console.log(`${index}-file.json is created`);
            resolve();
          });
        });

        promiseArr.push(promise);
      }

      return Promise.all(promiseArr).then(() => {
        return path;
      });
    })
    .then((homePath) => {
      //calling the delete function
      return deleteFiles(homePath);
    });

  return createDirPromise;
}

//reads the dir and deletes the files
export function deleteFiles(homePath) {
  const promiseOuter = new Promise((resolve, reject) => {
    fs.readdir(homePath, "utf-8", (err, fileList) => {
      if (err) {
        console.log(err);
        reject();
      }
      console.log("Successfully read directory");
      resolve([fileList, homePath]);
    });
  });

  promiseOuter.then((arr) => {
    let fileList = arr[0];
    let homePath = arr[1];

    let promiseArr = [];

    for (let index = 0; index < fileList.length; index++) {
      let fullPath = homePath + "/" + fileList[index];
      const promiseInner = new Promise((resolve, reject) => {
        fs.unlink(fullPath, (err) => {
          if (err) {
            console.log("Error: Could not unlink the path: ", fileList[index]);
            reject(err);
          }
          console.log(`Deleted file: `, fileList[index]);

          resolve();
        });
      });

      promiseArr.push(promiseInner);
    }

    return Promise.all(promiseArr);
  });

  return promiseOuter;
}
createAndDeleteFiles(5);
