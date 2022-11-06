const fs = require("fs");
function searchFull(filename, text) {
  return new Promise((resolve) => {
    const regEx = new RegExp(text, "i");
    const result = [];
    filename.forEach((item) =>
      fs.readFile("file/" + item + ".txt", "utf8", function (err, contents) {
        var co = 0;
        let lines = contents.toString().split("\n");
        lines.forEach((line) => {
          if (line && line.search(regEx) >= 0) {
            console.log("found in file ", item);
            result.push(line);
            var co = +1;
          }
        });

        resolve(result);
        console.log("finished");
      })
    );
  });
}
var filesarray = ["put your files that are in the sub directory named file"];
searchFull(filesarray, "the expression");
