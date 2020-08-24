import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const YES = 'yes';
const NO = 'no';
const min = 0;
const max = 100;
const gameRule = `Answer "${YES}" if the number is prime, otherwise answer "${NO}".`;

const isPrime = (number) => {
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) return false;
  }

  return number > 1;
};

const getGameData = () => {
  const question = generateRandomNumber(min, max);

  return {
    question,
    correctAnswer: (isPrime(question) ? YES : NO),
  };
};

export default () => runGame(gameRule, getGameData);
