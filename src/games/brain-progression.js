import runGame from '../run-game.js';
import generateRandomNumber from './utils/generate-random-number.js';

const gameRule = 'What number is missing in the progression?';

const replacer = '..';
const progressionSize = 10;

const getQuestion = () => {
  const progressionStart = generateRandomNumber(0, 100);
  const missedItemIndex = generateRandomNumber(0, progressionSize - 1);
  const arr = new Array(progressionSize).fill(1);
  const progression = arr.map((_, index) => {
    if (index === missedItemIndex) {
      return replacer;
    }
    return index + progressionStart;
  });

  return progression.join(' ');
};

const getCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const [firstItem, secondItem] = progression;

  if (firstItem === replacer) {
    return secondItem - 1;
  }

  const index = progression.findIndex((item) => item === replacer);

  return index + parseInt(firstItem, 10);
};

export default () => runGame(gameRule, getQuestion, getCorrectAnswer);
