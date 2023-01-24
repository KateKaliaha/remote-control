import { Button, down, left, mouse, right, screen, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const DrawSquare = async (args: string[], duplex: Duplex) => {
  const side = parseInt(args[0], 10);
  const widthScreen = await screen.width();
  const heightScreen = await screen.height();
  const position = await mouse.getPosition();
  if (
    position.x - 40 < 0 ||
    position.x + side > widthScreen ||
    position.y + side > heightScreen
  ) {
    console.log(
      `Sorry, mouse shouldn't go out of the screen! Move your mouse in other position`,
    );
    return;
  }
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
