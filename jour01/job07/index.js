import fs from "node:fs"

const content = fs.readFile("data.txt", {encoding:"utf-8"}, function (err,data) {
    console.log(data)
})

console.log("salut")