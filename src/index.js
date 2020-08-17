import readlineSync from 'readline-sync';
import * as Games from './games/index.js';

const stepsCount = 3;

export function startGame(gameName = 'BrainEven') {
  const Game = Games[gameName];
  const game = new Game();

  console.log(Game.rule);

  const askQuestion = (step) => {
    if (step === 0) {
      return true;
    }

    const question = game.getQuestion();
    const answer = readlineSync.question(`Question: ${question} `);
    const { isValid, correctAnswer } = game.validate(answer);

    if (!isValid) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

      return false;
    }

    console.log('Correct!');

    return askQuestion(step - 1);
  };

  return askQuestion(stepsCount);
}

export function askName() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
}

export function finishGame(result, name) {
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.error(`Let's try again, ${name}!`);
  }
}
