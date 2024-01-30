const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, './test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//create and write to file
// fs.writeFile(
//     path.join(__dirname, './test', 'hello.txt'),
//     'Hello world!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');
//     }
// );

//read file
// fs.readFile(path.join(__dirname, './test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//file rename
fs.rename(
  path.join(__dirname, "./test", "hello.txt"),
  path.join(__dirname, "./test", "hello world.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
