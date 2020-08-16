#!/usr/bin/env node

import askName from '../src/cli.js';
import startBrainEventGame from '../src/brain-even/index.js';

const name = askName();
const result = startBrainEventGame();

if (result) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.error(`Let's try again, ${name}!`);
}
