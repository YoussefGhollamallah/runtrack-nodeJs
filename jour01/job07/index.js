const fs = require("fs")

const filename = "D:/runtrack-nodeJs/jour01/job07/data.txt"

fs.appendFile(filename, "texte ajouter \r", (err)=> {
    if (err) throw err;
    console.log('Le fichier a été mis à jour');
	fs.readFile(filename, 'utf8', (err, data) => {
		if (err) throw err;
		console.log(data);
	});
})

console.log("affichage asynchrone activé")