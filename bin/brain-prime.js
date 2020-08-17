#!/usr/bin/env node

import { askName, startGame, finishGame } from '../src/index.js';

const name = askName();
const result = startGame('brainPrime');

finishGame(result, name);