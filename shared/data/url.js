
import { http } from "@activewidgets/options";
import { columns } from "@activewidgets/examples/data";


export default function({ mount }){

    const options = [
        http()
    ];

    const rows = 'https://cdn.activewidgets.com/demo/customers.json';

    mount('ax-datagrid', { columns, rows, options });
}
