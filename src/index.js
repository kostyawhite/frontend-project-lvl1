import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default (message = '') => {
  console.log(message);
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
