// import fs from "node:fs"

// const content = fs.readFile("data.txt", {encoding:"utf-8"}, function (err,data) {
//     console.log(data)
// })

// console.log("salut")


//  autre manière d'afficher le texte en asynchrone avec les promises

import { readFile } from "node:fs/promises"

const newContent = await readFile("newData.txt", {encoding: "utf8"})
console.log(newContent)