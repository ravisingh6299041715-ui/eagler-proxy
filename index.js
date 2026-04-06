const WebSocket = require("ws");

const server = new WebSocket.Server({ port: process.env.PORT || 3000 });

server.on("connection", function connection(ws) {
    console.log("Player connected");

    const mc = new WebSocket("ws://PEEKCOOL.aternos.me:44241");

    ws.on("message", function incoming(message) {
        mc.send(message);
    });

    mc.on("message", function incoming(data) {
        ws.send(data);
    });
});
