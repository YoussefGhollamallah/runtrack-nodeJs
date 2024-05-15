import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { parse } from 'node:url';

function router(req, res) {
    const path = parse(req.url).pathname;

    if (path === '/') {
        const file = createReadStream('index.html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        file.pipe(res, { end: false });
        file.on('end', () => {
            res.end();
        });
    } else if (path === '/about') {
        const file = createReadStream('about.html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        file.pipe(res, { end: false });
        file.on('end', () => {
            res.end();
        });
    } else {
        const file = createReadStream('404.html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        file.pipe(res, { end: false });
        file.on('end', () => {
            res.end();
        });
        
    }
}

const server = createServer(router);

server.listen(8888);
