import generateRandomNumber from '../utils/generate-random-number.js';
import gcd from '../utils/gcd.js';

export default class BrainGcd {
  static get rule() {
    return 'Find the greatest common divisor of given numbers.';
  }

  getQuestion() {
    const min = 1;
    const max = 50;
    const number1 = generateRandomNumber(min, max);
    const number2 = generateRandomNumber(min, max);

    this.question = `${number1} ${number2}`;
    this.correctAnswer = gcd(number1, number2);

    return this.question;
  }

  validate(answer) {
    return {
      correctAnswer: this.correctAnswer,
      isValid: parseInt(answer, 10) === this.correctAnswer,
    };
  }
}