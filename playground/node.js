const fs = require("fs");
// const book = {
//   title: "Alexander The Great",
//   author: "John rafle",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1_json.json", bookJSON);

const dataBuffer = fs.readFileSync("1_json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.title = "NO NO";
data.author = "AHMED";

const user = JSON.stringify(data);

fs.writeFileSync("1_json.json", user);
