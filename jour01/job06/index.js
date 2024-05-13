const fs = require("node:fs")


const filename = "D:/runtrack-nodeJs/jou01/data.txt"

fs.readFileSync(filename,"utf8", (err, data) => { 
    if (err) throw err;
    console.log(data);
})

