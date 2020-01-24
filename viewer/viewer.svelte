
<script>

    import page from 'page';
    import Header from './header.svelte';
    import Sidebar from './sidebar.svelte';
    import Home from './home.svelte';
    import Example from './example.svelte';
    import NotFound from './404.svelte';

    export let logo;
    export let readme;
    export let pages;
    export let mount;
    export let clean;

    let view, props, zoom;

    function url(...args){
        return args.map(s => s.trim().replace(/\W+/g, '-').toLowerCase()).join('/');
    }


    page('/', () => {
        view = Home;
        props = {readme};
    });

    page('/examples/:section/:item', ({params}) => {
        view = Example;
        props = {mount, pages, url, logo, zoom, current: url(params.section, params.item)};
    });

    page.exit('/examples/*', (ctx, next) => {
        console.log('exit');
        clean();
        next();
    });

    page('/test/:section/:item', ({params}) => {
        document.body.style.padding = '60px';
        zoom = true;
        view = Example;
        props = {mount, pages, url, zoom, current: url(params.section, params.item)};
    });

    page.exit('/test/*', (ctx, next) => {
        document.body.style.padding = undefined;
        zoom = false;
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

:global(*) {
    box-sizing: border-box;
}

:global(html) {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 12pt;
    line-height: 1.4375;
}

:global(body) {
    padding-right: 40px;
    padding-bottom: 40px;
    margin: 0;
    font-family: 'Nunito Sans', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif;
    color: #333;
}

:global(h1), :global(h2), :global(h3) {
    font-family: 'Montserrat', 'MS Reference Sans Serif', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 600;
}

:global(h1) {
    font-size: 2em;
    color: #08e;
}

:global(h2) {
    border-bottom: 4px solid #0a0;
    font-size: 1.4em;
    color: #555;
}

:global(h3) {
    font-size: 1.2em;
    color: #777;
}

:global(h1 img){
    max-height: 4rem;
    vertical-align: -0.5em;
    margin-right: 0.5em;
}

:global(#app) {
    width: 100%;
    font-family: 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    color: #000;
 }

:global(.ax-headers-view) {
    font-weight: bold;
    color: #666;
    border-bottom: 1px solid #aaa;
}

:global(.ax-gridlines) {
    border-bottom: 1px solid #eee;
}

</style>

{#if !zoom}
    <Header />
    <Sidebar {pages} {url} />
{/if}

<svelte:component this={view} {...props} />

