import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const gcd = (a, b) => {
  if (!b) return a;

  return gcd(b, a % b);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const min = 1;
  const max = 50;
  const number1 = generateRandomNumber(min, max);
  const number2 = generateRandomNumber(min, max);

  return `${number1} ${number2}`;
};

const getCorrectAnswer = (question) => {
  const [number1, number2] = question.split(' ');

  return gcd(number1, number2);
};

export default () => runGame(gameRule, getQuestion, getCorrectAnswer);
