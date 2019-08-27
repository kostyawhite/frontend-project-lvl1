import { cons } from '@hexlet/pairs';
import run from '../engine';
import generateNumber from '../random';

const message = 'What number is missing in the progression?\n';
const progressionLength = 10;

const generateProgression = (init, step) => {
  let result = `${init}`;
  let value = init + step;
  for (let i = 1; i < progressionLength; i += 1) {
    result += ` ${value}`;
    value += step;
  }
  return result;
};

const getGameData = () => {
  const init = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const progression = generateProgression(init, step).split(' ');
  const searchIdx = generateNumber(0, 9);
  const correctAsnwer = progression[searchIdx];
  progression[searchIdx] = '..';
  const question = progression.join(' ');
  return cons(question, correctAsnwer);
};

const play = () => {
  run(message, getGameData);
};

export default play;
