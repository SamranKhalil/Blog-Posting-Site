// Read from a file
const fs = require("fs");
// fs.readFile("./bin/text.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("In the end");

// Write in a file
// fs.writeFile("./bin/text1.txt", "Hello World of Niggas", () => {
//   console.log("Written");
// });

// making and deleting directories
// if (!fs.existsSync("./niggas_ass")) {
//   fs.mkdir("./niggas_ass", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Directory created");
//   });
// } else {
//   fs.rmdir("./niggas_ass", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Directory deleted");
//   });
// }

// deleting files
if (fs.existsSync("./bin/text1.txt")) {
  fs.unlink("./bin/text1.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Deleted");
  });
}
