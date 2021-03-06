
[Open fullscreen](/test/columns/formats/) | [Source on github](https://github.com/activewidgets/examples/tree/master/shared/columns/formats.js) | [User Guide](https://docs.activewidgets.com/guide/columns/formats/)

```js
import {intl, format, type} from "@activewidgets/options";

const options = [

    // enable intl. number/date formats
    intl('en-US'),

    // define named formats
    format('money', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}),
    format('date', {year: 'numeric', month: 'short', day: 'numeric'}),

    // define column types
    type('money', {format: 'money', width: 100, align: 'right'}),
    type('date', {format: 'date', width: 150, align: 'right', parse: v => Date.parse(v)})
];

const columns = [
    { header: 'Price', field: 'price', type: 'money' },
    { header: 'Date', field: 'date', type: 'date'}
];

const rows = [
    { price: 123, date: '2020-04-01T00:00' }
];
```