import { mouse, right } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveRight = async (shift: number, duplex: Duplex) => {
  await mouse.move(right(shift));
  duplex.write(`mouse_right_${shift}`);
  console.log(`Mouse is moved right on ${shift}px`);
};
