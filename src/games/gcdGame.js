import getRandomInt from '../utils.js';
import runGame from '../index.js';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));

  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => {
  runGame(description, generateRound);
};

export default playGcdGame;
