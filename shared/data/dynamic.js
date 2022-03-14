
export default function({ mount }){

    const rows = 100;

    function calc(){
        return {
            random: (1000 * Math.random()).toFixed(2)
        };
    }
    
    const columns = [
        { header: 'Random', field: 'random' }
    ];

    mount('ax-datagrid', { columns, rows, calc });
}
