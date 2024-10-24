import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playEvenGame;
