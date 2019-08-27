import { cons } from '@hexlet/pairs';
import run from '../engine';
import generateNumber from '../random';

const message = 'Answer "yes" if number even otherwise answer "no".\n';

// eslint-disable-next-line arrow-parens
const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const play = () => {
  run(message, getGameData);
};

export default play;
