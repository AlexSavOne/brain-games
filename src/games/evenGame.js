import getRandomInt from '../utils.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => runGame(description, generateRound);

export default playEvenGame;
