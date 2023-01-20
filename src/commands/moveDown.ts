import { down, mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveDown = async (shift: number, duplex: Duplex) => {
  await mouse.move(down(shift));
  duplex.write(`mouse_down_${shift}`);
  console.log(`Mouse is moved down on ${shift}px`);
};
