const url = require("url")

const URL = url.parse("https://www.google.com&search=nodejs")

// récupération du protocole 
const protocole = URL.protocol
console.log("Le protocole utilisé est : " + protocole)


// récupération du nom d'hôte
const hostname = URL.hostname
console.log("Le nom d'hôte est : " + hostname)