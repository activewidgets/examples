
import { rows } from "@activewidgets/examples/data";

export default function({mount}){

    const columns = [
        {header: 'Code', field: 'customerID', width: 80, fixed: true}, // fixed left
        {header: 'Company Name', field: 'companyName', width: 160, fixed: true}, // fixed left
        {header: 'Contact', field: 'contactName', width: 120},
        {header: 'Title', field: 'contactTitle', width: 120},
        {header: 'Address', field: 'address', width: 120},
        {header: 'City', field: 'city'},
        {header: 'Zip', field: 'postalCode', align: 'right'},
        {header: 'Phone', field: 'phone'},
        {header: 'Fax', field: 'fax'},
        {header: 'Country', field: 'country', fixed: true}  // fixed right
    ];

    mount('ax-datagrid', {columns, rows});
}
