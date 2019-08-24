import { cons } from '@hexlet/pairs';

const generateProgression = (init, step) => {
  let result = `${init}`;
  let value = init + step;
  for (let i = 0; i < 9; i += 1) {
    result += ` ${value}`;
    value += step;
  }
  return result;
};

const game = () => {
  const init = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = generateProgression(init, step).split(' ');
  const idxToFind = Math.floor(Math.random() * 10);
  const correctAsnwer = progression[idxToFind];
  progression[idxToFind] = '..';
  const question = progression.join(' ');
  return cons(question, correctAsnwer);
};

export default game;
