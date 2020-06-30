
<script>

    export let logo = '';
    export let zoom;
    export let url;
    export let pages;
    export let current;
    export let mount;
    export let framework;
    export let readme;

    let map = {},
        titles = {},
        local = '',
        notes = '',
        page,
        title,
        height = 200;

    Object.keys(pages).forEach(name => {
        Object.keys(pages[name]).forEach(item => {
            let key = url(name, pages[name][item].path || item);
            map[key] = pages[name][item];
            titles[key] = item;
        });
    });


$:{
    if (current){
        page = map[current],
        title = titles[current];
        notes = '';
    }
    else {
        page = {path: 'demo', readme};
        title = framework + ' Examples';
    }

    if (typeof page == 'function'){
        local = '';
        page({mount}, {});
        notes = page.notes || '';
    }

    if (typeof page == 'object'){
        height = 200;
        local = '/' + page.path + '/';
    }
}


function adjustFrame(e){

    let frame = document.querySelector('iframe');
    height = frame.contentDocument.documentElement.scrollHeight;
    notes = page.readme;

    setTimeout(() => {
        height = frame.contentDocument.documentElement.scrollHeight;
    }, 100);

    setTimeout(() => {
        height = frame.contentDocument.documentElement.scrollHeight;
    }, 300);
}


</script>

<style>

.fw-logo {
    position: absolute;
    top: 6.3rem;
    right: 60px;
    height: 4rem;
}

@media (max-width: 899px) { .fw-logo {
    top: 4.5rem;
    right: 20px;
}}

.title {
    position: absolute;
    top: 10.5rem;
    left: 16rem;
    right: 125px;
}

.title h1 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}

@media (max-width: 899px) { .title {
    font-size: 89%;
    top: 9rem;
    left: 25px;
    right: 85px;
}}

.frame-wrap {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 60px;
    margin: -60px;
    box-sizing: content-box;
}

@media (max-width: 1109px) { .frame-wrap {
    padding: 20px;
    margin: -20px;
}}

.frame-wrap > iframe {
    height: 200px;
    margin: -60px;
    border: none;
}

@media (max-width: 1109px) { .frame-wrap > iframe {
    margin: -20px;
}}

.page {
    display: block;
    position: relative;
    max-width: 46rem;
    margin: 40px auto 0;
    z-index: 1;
}

:global(code), :global(pre) {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

:global(pre) {
    display: block;
    position: relative;
    overflow: auto;
    background-color: #282c34;
    border-radius: 6px;
    line-height: 1.4;
    padding: 1.25rem 1.5rem;
    margin: 0.85rem 0;
}


</style>

{#if !zoom}
    <img class="fw-logo" src={logo} alt="logo">
    <div class="title"><h1>{title}</h1></div>
{/if}

{#if !page}
    Not registered
{/if}

{#if local}
    <div class="frame-wrap">
        <iframe src={local} style="height:{height}px" frameborder="0" scrolling="no" on:load={adjustFrame} title="example"></iframe>
    </div>
{/if}


{#if !zoom}
    <main class="page">{@html notes}</main>
{/if}
