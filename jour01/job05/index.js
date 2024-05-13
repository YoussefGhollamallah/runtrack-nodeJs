const path  = require("path")

let filename = path.basename("jour01/job05/index.js")
let extension = path.extname("jour01/job05/index.js")
let dir = path.dirname("D:/runtrack-nodeJs/jour01/job05/index.js")


console.log("Nom du fichier: ",filename)
console.log("Nom de l'extension: ", extension)
console.log("Répertoire parent du fichier", dir)