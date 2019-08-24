import { cons } from '@hexlet/pairs';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default game;
