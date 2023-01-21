import { mouse, Region, screen } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import Jimp from 'jimp';

export const makeScreen = async (_: string[], duplex: Duplex) => {
  const position = await mouse.getPosition();
  const size = 200;
  const x = position.x - 100;
  const y = position.y - 100;
  await screen.highlight(new Region(x, y, size, size));
  const img = await screen.grabRegion(new Region(x, y, size, size));
  const imgRgb = await img.toRGB();
  const imgJimp = new Jimp({
    data: Buffer.from(imgRgb.data),
    width: imgRgb.width,
    height: imgRgb.height,
  });
  const buffer = await imgJimp.getBufferAsync(Jimp.MIME_PNG);
  const base64 = buffer.toString('base64');
  duplex.write(`prnt_scrn ${base64}`);
  console.log(`Screen is done`);
};
