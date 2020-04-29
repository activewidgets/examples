
import array from './array.js';
import _array from './array.md';

import url from './url.js';
import _url from './url.md';

import func from './func.js';
import _func from './func.md';

import dynamic from './dynamic.js';
import _dynamic from './dynamic.md';

array.notes = _array;
url.notes = _url;
func.notes = _func;
dynamic.notes = _dynamic;

export const Data = {
    'Array': array,
    'URL': url,
    'Function': func,
    'Dynamic': dynamic
};