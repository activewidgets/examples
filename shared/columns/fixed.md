
[Open fullscreen](/test/columns/fixed/) | [Source on github](https://github.com/activewidgets/examples/tree/master/shared/columns/fixed.js) | [User Guide](https://docs.activewidgets.com/guide/scrolling/fixed/)

```js
const columns = [
    {header: 'Code', field: 'customerID', width: 80, fixed: true}, // fixed left
    {header: 'Company Name', field: 'companyName', width: 160, fixed: true}, // fixed left
    {header: 'Contact', field: 'contactName', width: 120},
    // ...
    {header: 'Fax', field: 'fax'},
    {header: 'Country', field: 'country', fixed: true}  // fixed right
];
```