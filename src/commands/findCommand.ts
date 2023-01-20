import { Duplex } from 'stream';
import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { moveUp } from './moveUp';

const commands: Record<
  string,
  (shift: number, duplex: Duplex) => Promise<void>
> = {
  mouse_down: moveDown,
  mouse_up: moveUp,
  mouse_left: moveLeft,
  mouse_right: moveRight,
};

export const findCommand = (
  nameCommand: string,
): string | ((shift: number, duplex: Duplex) => Promise<void>) => {
  return commands[nameCommand]
    ? commands[nameCommand]
    : `Command ${nameCommand} did not found!`;
};
