
[Open fullscreen](/test/data/function/) | [Source on github](https://github.com/activewidgets/examples/tree/master/shared/data/func.js) | [User Guide](https://docs.activewidgets.com/guide/data/inputs/#function)


```js
const url = 'https://cdn.activewidgets.com/demo/customers.json';

function rows(){
    return fetch(url).then(res => res.json());
}
```