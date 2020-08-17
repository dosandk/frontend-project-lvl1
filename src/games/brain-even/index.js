import generateRandomNumber from '../utils/generate-random-number.js';

const YES = 'yes';
const NO = 'no';

const answersMap = {
  true: YES,
  false: NO,
};

export default class BrainEven {
  static get rule() {
    return `Answer "${YES}" if the number is even, otherwise answer "${NO}".`;
  }

  static checkNumberParity(number) {
    return number % 2 === 0;
  }

  getQuestion() {
    const min = 1;
    const max = 100;
    const number = generateRandomNumber(min, max);
    const isEven = BrainEven.checkNumberParity(number);

    this.question = number;
    this.correctAnswer = answersMap[isEven];

    return this.question;
  }

  validate(answer) {
    const isEven = BrainEven.checkNumberParity(this.question);

    if (answer !== YES && answer !== NO) {
      return {
        correctAnswer: this.correctAnswer,
        isValid: false,
      };
    }

    return {
      correctAnswer: this.correctAnswer,
      isValid: (answer === YES && isEven) || (answer === NO && !isEven),
    };
  }
}