const fs = require("fs")


const filename = "D:/runtrack-nodeJs/data.txt"

fs.readFile(filename,"utf8", (err, data) => { 
    if (err) throw err;
    console.log(data);
})

