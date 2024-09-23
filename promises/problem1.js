const { default: fs } = await import("fs/promises");

export function createDirectory(input = 5, createFiles, deleteFiles) {
  let dirPath = "/home/harrish-easwar/test";
  fs.mkdir(dirPath)
    .then(() => {
      const set = new Set();
      //using set to store file name.O(1) look-up
      return createFiles(dirPath, input, set);
    })
    .then((set) => {
      deleteFiles(dirPath, set);
    })
    .catch((err) => {
      console.log(`Error:could not create a directory with path: ${dirPath}`);
      console.log(err);
    });
}

export function createFiles(dirPath, input, set) {
  if (input === 0) {
    return set;
  }
  //Using promise.all to store all promises before moving ahead
  let promises = [];

  for (let index = 0; index < input; index++) {
    let fileName = `${index}-file.json`;
    let newPath = dirPath + "/" + fileName;

    let json = {
      id: index,
      value: Math.random(),
    };

    const promise = fs
      .writeFile(newPath, JSON.stringify(json), "utf-8")
      .then(() => {
        console.log(`${fileName} is created`);
        set.add(fileName);
      })
      .catch((err) => {
        console.log(`Error: Could not create file with name: ${fileName}`);
        console.log(err);
      });
    promises.push(promise);
  }
  //once all promises complete. Return set of file names
  return Promise.all(promises).then(() => {
    return set;
  });
}

export function deleteFiles(dir, set = new Set()) {
  if (set.size === 0) {
    return console.log("All files deleted");
  }

  fs.readdir(dir, "utf-8")
    .then((list) => {
      let promiseArr = [];

      list.forEach((path) => {
        if (set.has(path.trim())) {
          let fullPath = dir + "/" + path;

          const promise = fs
            .unlink(fullPath)
            .then(() => {
              console.log(`Successfully removed the file: ${path}`);
            })
            .catch((err) => {
              console.log(`Error: Could not remove the file: ${path}`);
              console.log(err);
            });
          promiseArr.push(promise);
        }
      });

      return Promise.all(promiseArr);
    })
    .then(() => {
      console.log("Successfully deleted the files");
    })
    .catch((err) => {
      console.log("Error: could not delete the files");
      console.log(err);
    })
    .catch((err) => {
      console.log("could not read directory");
      console.log(err);
    });
}

createDirectory(5, createFiles, deleteFiles);
