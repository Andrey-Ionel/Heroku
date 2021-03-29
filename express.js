/* eslint-disable no-fallthrough */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = process.env.PORT || 7777;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(json) {
    const event = JSON.parse(json);

    switch (event.type) {
      case 'SEND_MESSAGE': {
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(json);
          }
        });
      }
      default: {
        console.log('Unknown event type');

        ws.send('Unknown event type');
      }
    }
  });

  ws.on('close', function close() {
    console.log('disconnected');
  });
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
