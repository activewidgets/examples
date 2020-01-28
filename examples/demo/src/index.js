
import { mount} from "@activewidgets/js";
import { northwind } from "@activewidgets/examples/data";
import * as templates from './templates';
import "./styles.css";


const columns = [
    { header: "Company", template: "company", width: 200, fixed: true},
    { header: "Contact", template: "contact", width: 200, class: 'bg-1', key: 'contact'},
    { header: "Address", template: "address", width: 200, key: 'address' },
    { header: "Country", template: 'country', width: 170, field: "country" },
    { header: "Phone/Fax", template: 'phone', width: 150}
];


const rows = northwind.customers;


function onRow(row){

    const {data, cells} = row;

    if (data.country == 'France'){
        row.class = 'bg-2';
    }

    if (data.city == 'London'){
        cells.address = {class: 'circle'};
    }

    if (data.contactTitle == 'Owner'){
        cells.contact = {class: 'star'};
    }
}


mount('ax-datagrid', {columns, rows, templates, onRow});