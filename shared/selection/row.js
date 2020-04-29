
import {select} from '@activewidgets/options';
import {columns, rows} from "@activewidgets/examples/data";

export default function({mount}){

    let options = [select()];

    mount('ax-datagrid', {columns, rows, options});
}
