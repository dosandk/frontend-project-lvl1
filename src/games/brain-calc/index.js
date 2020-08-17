import generateRandomNumber from '../utils/generate-random-number.js';

export default class BrainCalc {
  static get rule() {
    return 'What is the result of the expression?';
  }

  constructor() {
    this.operations = ['+', '-', '*'];
  }

  getQuestion() {
    const min = 1;
    const max = 50;
    const number1 = generateRandomNumber(min, max);
    const number2 = generateRandomNumber(min, max);
    const operationIndex = generateRandomNumber(0, this.operations.length - 1);

    this.question = `${number1} ${this.operations[operationIndex]} ${number2}`;

    return this.question;
  }

  validate(answer) {
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(this.question);

    return {
      correctAnswer,
      isValid: correctAnswer === parseInt(answer, 10),
    };
  }
}
