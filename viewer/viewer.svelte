
<script>

    import page from 'page';
    import Home from './home.svelte';
    import Example from './example.svelte';
    import NotFound from './404.svelte';

    export let pages;
    export let data;
    export let render;
    export let clean;

    let view, current;

    function url(...args){
        return args.map(s => s.trim().replace(/\W+/g, '-').toLowerCase()).join('/');
    }


    page('/', () => {
        view = Home;
    });

    page('/examples/:section/:item', ({params}) => {
        view = Example;
        current = url(params.section, params.item);
    });

    page.exit('/examples/*', (ctx, next) => {
        current = '';
        clean();
        next();
    });

    page('/test/:section/:item', ({params}) => {
        view = Example;
        current = url(params.section, params.item);
    });

    page.exit('/test/*', (ctx, next) => {
        current = '';
        clean();
        next();
    });

    page('*', () => {
        view = NotFound;
    });

    page.start();

</script>

<style>

</style>

<svelte:component this={view} {pages} {data} {url} {current} {render}/>
