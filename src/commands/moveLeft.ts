import { mouse, left } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveLeft = async (args: string[], duplex: Duplex) => {
  const shift = parseInt(args[0], 10);
  await mouse.move(left(shift));
  duplex.write(`mouse_left_${shift}`);
  console.log(`Mouse is moved left on ${shift}px`);
};
