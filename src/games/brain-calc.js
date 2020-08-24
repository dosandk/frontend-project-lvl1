import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const min = 1;
const max = 50;
const operations = ['+', '-', '*'];
const gameRule = 'What is the result of the expression?';
const calculate = (number1, operator, number2) => {
  const operationsList = {
    '+': () => number1 + number2,
    '-': () => number1 - number2,
    '*': () => number1 * number2,
  };

  return operationsList[operator]();
};

const getGameData = () => {
  const number1 = generateRandomNumber(min, max);
  const number2 = generateRandomNumber(min, max);
  const operationIndex = generateRandomNumber(0, operations.length - 1);
  const operation = operations[operationIndex];
  const question = `${number1} ${operation} ${number2}`;
  const answer = calculate(number1, operation, number2);

  return {
    question,
    correctAnswer: String(answer),
  };
};

export default () => runGame(gameRule, getGameData);
