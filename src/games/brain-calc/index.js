import generateRandomNumber from '../utils/generate-random-number.js';

const brainCalc = {
  operations: ['+', '-', '*'],
  rule: 'What is the result of the expression?',
  getQuestion() {
    const min = 1;
    const max = 50;
    const number1 = generateRandomNumber(min, max);
    const number2 = generateRandomNumber(min, max);
    const operationIndex = generateRandomNumber(0, this.operations.length - 1);

    const question = `${number1} ${this.operations[operationIndex]} ${number2}`;
    // eslint-disable-next-line no-eval
    this.correctAnswer = eval(question);

    return question;
  },
  validate(answer) {
    return {
      correctAnswer: this.correctAnswer,
      isValid: this.correctAnswer === parseInt(answer, 10),
    };
  },
};

export default brainCalc;
