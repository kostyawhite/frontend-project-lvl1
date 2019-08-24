#!/usr/bin/env node

import run from '..';
import game from '../games/progression';

const message = 'What number is missing in the progression?\n';

run(message, game);
