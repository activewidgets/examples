
export default function({ mount }){

    const rows = 100;

    function onRow(row){
        row.cells.random = (1000 * Math.random()).toFixed(2);
    }

    const columns = [
        { header: 'Random', key: 'random' }
    ];

    mount('ax-datagrid', { columns, rows, onRow });
}
