
import { columns } from "@activewidgets/examples/data";


export default function({ mount }){

    const rows = 'https://cdn.activewidgets.com/demo/customers.json';

    mount('ax-datagrid', { columns, rows });
}
