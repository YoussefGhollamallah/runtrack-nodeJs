import {createServer} from "node:http"
import { createReadStream } from "node:fs"

const server = createServer((req,res) => {
    const file = createReadStream("index.html");
    file.pipe(res)
    
})

server.listen("8888")
