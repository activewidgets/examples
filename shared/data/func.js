
import { columns } from "@activewidgets/examples/data";


export default function({ mount }){

    const url = 'https://cdn.activewidgets.com/demo/customers.json';

    function rows(){
        return fetch(url).then(res => res.json());
    }

    mount('ax-datagrid', { columns, rows });
}
