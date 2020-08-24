import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  const startRound = (round) => {
    if (round === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const { question, correctAnswer } = getGameData();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    startRound(round - 1);
  };

  startRound(roundsCount);
};
