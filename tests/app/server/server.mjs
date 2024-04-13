/**
 * server.js
 */
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.Server(app);

app.use( bodyParser({"limit": "1024mb"}) );
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use( express.static( path.resolve(__dirname, '../../../docs/') ) );

// 3000番ポートでLISTEN状態にする
server.listen( 3000, function(){
	console.log('server-standby');
	console.log('open http://localhost:3000/demo/');
} );
