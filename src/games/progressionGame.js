import getRandomInt from '../utils.js';
import runGame from '../index.js';

const generateRound = () => {
  const progressionLength = getRandomInt(5, 11);
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomInt(0, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const playProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, generateRound);
};

export default playProgressionGame;
