import { cons } from '@hexlet/pairs';
import run from '../engine';
import generateNumber from '../random';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = generateNumber(1, 100);
  const correctAsnwer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAsnwer);
};

const play = () => {
  run(message, getGameData);
};

export default play;
