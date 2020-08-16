import readlineSync from 'readline-sync';
import generateRandomNumber from './generate-random-number.js';

const stepsCount = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const YES = 'yes';
const NO = 'no';

const answersMap = {
  true: YES,
  false: NO,
};

const validate = (answer, isEven) => {
  if (answer !== YES && answer !== NO) {
    return false;
  }

  return (answer === YES && isEven) || (answer === NO && !isEven);
};

const checkNumberParity = (number) => number % 2 === 0;

export default function startBrainEventGame() {
  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  const askQuestion = (step) => {
    if (step === 0) {
      return true;
    }

    const randomNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    const isEven = checkNumberParity(randomNumber);

    if (!validate(answer, isEven)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answersMap[isEven]}".`);
      return false;
    }

    console.log('Correct!');

    return askQuestion(step - 1);
  };

  return askQuestion(stepsCount);
}
