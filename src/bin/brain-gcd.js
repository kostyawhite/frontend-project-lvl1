#!/usr/bin/env node

import run from '..';
import game from '../games/gcd';

const message = 'Find the greatest common divisor of given numbers.\n';

run(message, game);
