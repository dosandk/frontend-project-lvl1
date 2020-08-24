import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const gameRule = 'What number is missing in the progression?';
const replacer = '..';
const progressionSize = 10;

const createProgression = (start, step, length) => {
  const arr = [];

  const addProgressionItem = (index, value) => {
    if (index === length) return;

    arr.push(value);
    addProgressionItem(index + 1, value + step);
  };

  addProgressionItem(0, start);

  return arr;
};

const getGameData = () => {
  const progressionStart = generateRandomNumber(0, 100);
  const replacerIndex = generateRandomNumber(0, progressionSize - 1);
  const progressionStep = generateRandomNumber(2, 6);
  const progression = createProgression(progressionStart, progressionStep, progressionSize);
  const question = progression.map((item, index) => (index === replacerIndex ? replacer : item)).join(' ');

  return {
    question,
    correctAnswer: String(progression[replacerIndex]),
  };
};

export default () => runGame(gameRule, getGameData);
