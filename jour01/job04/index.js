const fs = require("fs")

fs.readdir( "D:/runtrack-nodeJs/jour01", (err, files) => {
    if (err) throw err;
    console.log("Contenu du répertoire courant : ",files);
})