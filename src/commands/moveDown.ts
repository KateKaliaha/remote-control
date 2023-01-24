import { down, mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveDown = async (args: string[], duplex: Duplex) => {
  const shift = parseInt(args[0], 10);
  await mouse.move(down(shift));
  duplex.write(`mouse_down_${shift}`);
  console.log(`Mouse is moved down on ${shift}px`);
};
