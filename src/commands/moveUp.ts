import { up, mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveUp = async (args: string[], duplex: Duplex) => {
  const shift = parseInt(args[0], 10);

  await mouse.move(up(shift));
  duplex.write(`mouse_up_${shift}`);
  console.log(`Mouse is moved up on ${shift}px`);
};
