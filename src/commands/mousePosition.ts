import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const mousePosition = async (args: string[], duplex: Duplex) => {
  const position = await mouse.getPosition();
  const message = `mouse_position ${position.x},${position.y}`;

  duplex.write(message);
  console.log(message);
};
