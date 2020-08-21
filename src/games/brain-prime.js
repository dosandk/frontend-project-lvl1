import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const YES = 'yes';
const NO = 'no';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const gameRule = `Answer "${YES}" if the number is prime, otherwise answer "${NO}".`;

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return generateRandomNumber(min, max);
};

const getCorrectAnswer = (question) => (isPrime(question) ? YES : NO);

export default () => runGame(gameRule, getQuestion, getCorrectAnswer);
