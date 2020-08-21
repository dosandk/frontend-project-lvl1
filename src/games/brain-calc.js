import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const gameRule = 'What is the result of the expression?';

const getQuestion = () => {
  const min = 1;
  const max = 50;
  const operations = ['+', '-', '*'];
  const number1 = generateRandomNumber(min, max);
  const number2 = generateRandomNumber(min, max);
  const operationIndex = generateRandomNumber(0, operations.length - 1);

  return `${number1} ${operations[operationIndex]} ${number2}`;
};

// eslint-disable-next-line no-eval
const getCorrectAnswer = (question) => eval(question);

export default () => runGame(gameRule, getQuestion, getCorrectAnswer);
