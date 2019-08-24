#!/usr/bin/env node

import run from '..';
import game from '../games/calc';

const message = 'What is the result of the expression?\n';

run(message, game);
