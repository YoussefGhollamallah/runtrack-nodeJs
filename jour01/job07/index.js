import {readFile} from "fs"

readFile("jour01/job07/data.txt", "utf-8", function (err, data) {
    const content = data;
    console.log(content);
});

//  autre manière d'afficher le texte en asynchrone avec les promises

// import { readFile } from "node:fs/promises"

// const newContent = await readFile("newData.txt", {encoding: "utf8"})
// console.log(newContent)