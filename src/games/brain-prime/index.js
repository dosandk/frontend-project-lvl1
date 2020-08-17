import isPrime from '../utils/is-prime.js';
import generateRandomNumber from '../utils/generate-random-number.js';

const YES = 'yes';
const NO = 'no';

const answersMap = {
  true: YES,
  false: NO,
};

const brainPrime = {
  rule: `Answer "${YES}" if the number is prime, otherwise answer "${NO}".`,
  getQuestion() {
    const min = 0;
    const max = 100;
    const number = generateRandomNumber(min, max);
    const question = number;

    this.correctAnswer = isPrime(number);

    return question;
  },
  validate(answer) {
    const isPrimeNumber = this.correctAnswer;

    if (answer !== YES && answer !== NO) {
      return {
        correctAnswer: answersMap[this.correctAnswer],
        isValid: false,
      };
    }

    return {
      correctAnswer: answersMap[this.correctAnswer],
      isValid: (answer === YES && isPrimeNumber) || (answer === NO && !isPrimeNumber),
    };
  },
};

export default brainPrime;
