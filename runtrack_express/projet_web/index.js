const express = require("express")
const port = process.env.PORT || 80

const app = express()

app.listen(port, () => {
    console.log("Serveur actif sur le port: ", port)
})