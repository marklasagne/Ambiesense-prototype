// Basic express/node server to test websocket connections

const express = require("express");
const app = express();
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


wss.on("connection", (ws) => {
    // log that a client connected 
    console.log('new client connected');

    ws.on("message", (message) => {
        console.log('recieved: ' + message.toString());

        // for now just send out to all clients
        wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
        }
        });
    });
});

app.get("/", (req, res) => {
  res.send("Running WebSockets");
});

server.listen(8082, () => {
  console.log("Listening to port 8082");
});

