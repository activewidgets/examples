
[Open fullscreen](/test/data/dynamic/) | [Source on github](https://github.com/activewidgets/examples/tree/master/shared/data/dynamic.js) | [User Guide](https://docs.activewidgets.com/guide/data/#dynamic-values)


```js
const rows = 100;

function onRow(row){
    row.cells.random = (1000 * Math.random()).toFixed(2);
}

const columns = [
    { header: 'Random', key: 'random' }
];
```