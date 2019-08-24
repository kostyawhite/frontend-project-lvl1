#!/usr/bin/env node

import run from '..';
import game from '../games/prime';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

run(message, game);
