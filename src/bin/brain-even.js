#!/usr/bin/env node

import run from '..';
import game from '../games/even';

const message = 'Answer "yes" if number even otherwise answer "no".\n';

run(message, game);
