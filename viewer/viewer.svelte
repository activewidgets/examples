
<script>

    import page from 'page';
    import Home from './home.svelte';
    import Example from './example.svelte';
    import NotFound from './404.svelte';

    export let readme;
    export let pages;
    export let mount;
    export let clean;

    let view, props;

    function url(...args){
        return args.map(s => s.trim().replace(/\W+/g, '-').toLowerCase()).join('/');
    }


    page('/', () => {
        view = Home;
        props = {url, pages, readme};
    });

    page('/examples/:section/:item', ({params}) => {
        view = Example;
        props = {mount, pages, url, current: url(params.section, params.item)};
    });

    page.exit('/examples/*', (ctx, next) => {
        clean();
        next();
    });

    page('/test/:section/:item', ({params}) => {
        view = Example;
        props = {mount, pages, url, current: url(params.section, params.item)};
    });

    page.exit('/test/*', (ctx, next) => {
        clean();
        next();
    });

    page('*', () => {
        view = NotFound;
        props = null;
    });

    page.start();

</script>

<style>

</style>

<svelte:component this={view} {...props} />
