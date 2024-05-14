const url = require("url")

const URL = url.parse("https://www.google.com&search=nodejs")


const protocole = URL.protocol
console.log(protocole)
