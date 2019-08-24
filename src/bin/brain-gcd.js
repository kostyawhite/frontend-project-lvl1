#!/usr/bin/env node

import run from '..';
import game from '../games/brain-gcd';

const message = 'Find the greatest common divisor of given numbers.\n';

run(message, game);
