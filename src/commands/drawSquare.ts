import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const DrawSquare = async (args: string[], duplex: Duplex) => {
  const side = parseInt(args[0], 10);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(side));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(side));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(side));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(side));
  await mouse.releaseButton(Button.LEFT);
  duplex.write(`draw_square_${side}`);
  console.log(`Square is drawn, side ${side}px`);
};
