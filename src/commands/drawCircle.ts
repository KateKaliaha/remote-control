import { Button, mouse, Point, screen, straightTo } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const drawCircle = async (args: string[], duplex: Duplex) => {
  const radius = parseInt(args[0], 10);
  const position = await mouse.getPosition();
  const x = position.x;
  const y = position.y;
  const heightScreen = await screen.height();
  if (x - radius * 2 < 0 || y + radius > heightScreen || y - radius < 0) {
    console.log(
      `Sorry, mouse shouldn't go out of the screen! Move your mouse in other position`,
    );
    return;
  }
  await mouse.pressButton(Button.LEFT);
  for (let i = 0; i <= 360; i++) {
    const height = Math.sin((2 * Math.PI * i) / 360) * radius + y;
    const chord = Math.cos((2 * Math.PI * i) / 360) * radius + (x - radius);
    await mouse.move(straightTo(new Point(chord, height)));
  }
  await mouse.releaseButton(Button.LEFT);
  duplex.write(`draw_circle_${radius}`);
  console.log(`Circle is drawn, radius ${radius}px`);
};
