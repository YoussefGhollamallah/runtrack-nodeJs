import {createServer} from "node:http"
import { createReadStream } from "node:fs"

const server = createServer((req,res) => {
    const file = createReadStream("index.html");
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    file.pipe(res, {end: false})
    file.on("end", () => {
        res.end()
    })
    
})

server.listen("8888")
