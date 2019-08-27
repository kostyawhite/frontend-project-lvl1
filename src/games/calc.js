import { cons } from '@hexlet/pairs';
import run from '../engine';
import generateNumber from '../random';

const message = 'What is the result of the expression?\n';
const operators = '+-*';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const getGameData = () => {
  const operator = operators[generateNumber(0, 2)];
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const question = `${num1} ${operator} ${num2}`;
  const correctAsnwer = `${calculate(num1, num2, operator)}`;
  return cons(question, correctAsnwer);
};

const play = () => {
  run(message, getGameData);
};

export default play;
