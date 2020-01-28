
<script>

    import page from 'page';
    import Header from './header.svelte';
    import Sidebar from './sidebar.svelte';
    import Home from './home.svelte';
    import Example from './example.svelte';
    import NotFound from './404.svelte';

    export let framework;
    export let pkg;
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

    page('/examples/:section/:item/', ({params}) => {
        view = Example;
        props = {mount, pages, url, logo, zoom, current: url(params.section, params.item)};
    });

    page.exit('/examples/*', (ctx, next) => {
        console.log('exit');
        clean();
        next();
    });

    page('/test/:section/:item/', ({params}) => {
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
    font-size: 16px;
    line-height: 1.25;
}

:global(body) {
    padding-right: 40px;
    padding-bottom: 40px;
    margin: 0;
    font-family: 'Nunito Sans', 'Segoe UI', 'Avenir', 'Helvetica Neue', 'Tahoma', sans-serif;
    color: #333;
}

:global(h1), :global(h2), :global(h3) {
    font-family: 'Montserrat', 'MS Reference Sans Serif', 'Lucida Grande', 'Arial', sans-serif;
    font-weight: 600;
    padding-top: 1em;
    margin-top: 1em;
    margin-bottom: 0;
}

:global(h1) {
    font-size: 225%;
    color: #08e;
}

:global(h1:first-child) {
    padding-top: 0;
}


:global(h2) {
    border-bottom: 4px solid #0a0;
    font-size: 150%;
    color: #555;
    margin-bottom: 1em;
}

:global(h3) {
    font-size: 125%;
    color: #777;
}

:global(h1 img){
    max-height: 4rem;
    vertical-align: -0.5em;
    margin-right: 0.5em;
}

:global(p), :global(ul), :global(ol) {
    line-height: 1.625;
}

:global(#app) {
    width: 100%;
    font: 14px/1.2143 'Segoe UI', 'Avenir', 'Helvetica Neue', 'Tahoma', sans-serif;
    color: #000;
 }

:global(.ax-datagrid) {
    max-height: 300px;
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
    <Header {pkg} />
    <Sidebar {framework} {pages} {url} />
{/if}

<svelte:component this={view} {...props} />
