import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const min = 1;
const max = 50;
const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) return a;

  return gcd(b, a % b);
};

const getGameData = () => {
  const number1 = generateRandomNumber(min, max);
  const number2 = generateRandomNumber(min, max);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: String(gcd(number1, number2)),
  };
};

export default () => runGame(gameRule, getGameData);
