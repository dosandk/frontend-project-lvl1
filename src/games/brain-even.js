import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const min = 1;
const max = 100;
const YES = 'yes';
const NO = 'no';
const gameRule = `Answer "${YES}" if the number is even, otherwise answer "${NO}".`;

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = generateRandomNumber(min, max);

  return {
    question,
    correctAnswer: (isEven(question) ? YES : NO),
  };
};

export default () => runGame(gameRule, getGameData);
