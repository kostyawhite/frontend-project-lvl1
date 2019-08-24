import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');

export default (message = '', game) => {
  console.log(message);
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const result = game();
    const question = car(result);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(result);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
