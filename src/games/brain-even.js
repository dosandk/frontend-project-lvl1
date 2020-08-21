import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const YES = 'yes';
const NO = 'no';
const gameRule = `Answer "${YES}" if the number is even, otherwise answer "${NO}".`;

const isEven = (number) => number % 2 === 0;

const getQuestion = () => {
  const min = 1;
  const max = 100;

  return generateRandomNumber(min, max);
};

const getCorrectAnswer = (question) => (isEven(question) ? YES : NO);

export default () => runGame(gameRule, getQuestion, getCorrectAnswer);
