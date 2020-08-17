import generateRandomNumber from '../utils/generate-random-number.js';

const brainProgression = {
  rule: 'What number is missing in the progression?',
  getQuestion() {
    const progressionSize = 10;
    const missedItemIndex = generateRandomNumber(0, progressionSize - 1);
    const progressionStart = generateRandomNumber(0, 100);
    const arr = new Array(progressionSize).fill(1);
    const replacer = '..';

    const progression = arr.map((_, index) => {
      if (index === missedItemIndex) {
        this.correctAnswer = index + progressionStart;
        return replacer;
      }

      return index + progressionStart;
    });

    return progression.join(' ');
  },
  validate(answer) {
    return {
      correctAnswer: this.correctAnswer,
      isValid: parseInt(answer, 10) === this.correctAnswer,
    };
  },
};

export default brainProgression;
