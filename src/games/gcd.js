import { cons } from '@hexlet/pairs';
import run from '../engine';
import generateNumber from '../random';

const message = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return cons(question, correctAnswer);
};

const play = () => {
  run(message, getGameData);
};

export default play;
