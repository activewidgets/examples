
import formats from './formats.js';
import _formats from './formats.md';

import fixed from './fixed.js';
import _fixed from './fixed.md';

formats.notes = _formats;
fixed.notes = _fixed;

export const Columns = {
    'Formats': formats,
    'Fixed': fixed
};