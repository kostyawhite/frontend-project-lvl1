import { cons } from '@hexlet/pairs';

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

const game = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAsnwer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAsnwer);
};

export default game;
