import fs from "node:fs"


const content = fs.readFileSync("data.txt", "utf8")
console.log(content)