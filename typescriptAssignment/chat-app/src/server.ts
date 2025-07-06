import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = 3000;

// Serve static files from public/
app.use(express.static('public'));

// Store connected clients
const clients: WebSocket[] = [];

wss.on('connection', (ws: WebSocket) => {
  clients.push(ws);
  console.log('New client connected');

  ws.on('message', (data: string) => {
    console.log('Received:', data);

    // Broadcast to all connected clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    const index = clients.indexOf(ws);
    if (index !== -1) clients.splice(index, 1);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
