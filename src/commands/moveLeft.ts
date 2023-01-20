import { mouse, left } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveLeft = async (shift: number, duplex: Duplex) => {
  await mouse.move(left(shift));
  duplex.write(`mouse_left_${shift}`);
  console.log(`Mouse is moved left on ${shift}px`);
};
