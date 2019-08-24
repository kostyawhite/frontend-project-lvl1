import { cons } from '@hexlet/pairs';

const calc = (num1, operator, num2) => {
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

const game = () => {
  const operators = '+-*';
  const operator = operators[Math.floor(Math.random() * 3)];
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${operator} ${num2}`;
  const correctAsnwer = `${calc(num1, operator, num2)}`;
  return cons(question, correctAsnwer);
};

export default game;
