const fs = require("fs");

// fs.writeFile("example.txt", "this is an testing file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File successfully created");
//     fs.readFile("example.txt", "utf-8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully renamed the file");
//   }
// });

fs.appendFile("example2.txt", "some data being updated", (err) => {
  if (err) console.log(err);
  else console.log("The data has been successfully updated");
});
