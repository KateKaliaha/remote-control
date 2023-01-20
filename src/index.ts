import { httpServer } from './http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { findCommand } from './commands/findCommand';

const HTTP_PORT = 8181;
const SERVER_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: SERVER_PORT });

wss.on('connection', function connection(ws) {
  console.log(`Start websocket connection on port ${SERVER_PORT}`);
  const duplex = createWebSocketStream(ws, {
    decodeStrings: false,
    encoding: 'utf8',
  });

  duplex.on('data', async (data) => {
    const splitData = data.split(' ');
    const [command, ...args] = splitData;
    const number = parseInt(args[0], 10);
    const action = findCommand(command);
    if (typeof action !== 'string') {
      await action(number, duplex);
    } else {
      console.log(action);
    }
  });
});
