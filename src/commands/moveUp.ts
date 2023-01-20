import { up, mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveUp = async (shift: number, duplex: Duplex) => {
  await mouse.move(up(shift));
  duplex.write(`mouse_up_${shift}`);
  console.log(`Mouse is moved up on ${shift}px`);
};
