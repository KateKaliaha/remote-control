import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const DrawRectangle = async (args: string[], duplex: Duplex) => {
  const width = parseInt(args[0], 10);
  const height = parseInt(args[1], 10);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(height));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(height));
  await mouse.releaseButton(Button.LEFT);
  duplex.write(`draw_rectangle_${width}_${height}`);
  console.log(`Rectangle is drawn, width ${width}px, height ${height}px`);
};
