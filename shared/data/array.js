
export default function({ mount }){

    const rows = [
        { message: 'Hello, World!', source: 'Array' }
    ];

    mount('ax-datagrid', { rows });
}
