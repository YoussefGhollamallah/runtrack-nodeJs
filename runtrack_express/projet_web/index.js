const express = require("express")
const port = process.env.PORT || 80

const app = express()

app.listen(port, () => {
    console.log("Serveur actif sur le port: ", port)
})

app.get("/", (req, res) => {
    res.send("Bienvenue sur la page d'acceuil")
} )


app.get("/about", (req, res) => {
    res.send("Bienvenue sur la page de projet")
} )
