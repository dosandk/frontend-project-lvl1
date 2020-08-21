import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (gameRule, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const startGame = () => {
    console.log(gameRule);

    const askQuestion = (step) => {
      if (step === 0) return true;

      const question = getQuestion();
      const correctAnswer = getCorrectAnswer(question);
      const userAnswer = readlineSync.question(`Question: ${question} `);

      if (String(userAnswer) !== String(correctAnswer)) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

        return false;
      }

      console.log('Correct!');

      return askQuestion(step - 1);
    };

    return askQuestion(stepsCount);
  };

  const result = startGame();

  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.error(`Let's try again, ${name}!`);
  }
};
