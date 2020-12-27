const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Florian";
data.age = "32";

const citizenJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", citizenJSON);

console.log(citizenJSON);
