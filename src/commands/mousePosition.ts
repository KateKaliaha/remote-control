import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const mousePosition = async (args: string[], duplex: Duplex) => {
  const position = await mouse.getPosition();
  const message = `Mouse position x:${position.x}px, y:${position.y}px`;

  duplex.write(`mouse_position `);
  console.log(message);
};
