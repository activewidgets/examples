
<script>

    export let logo = '';
    export let zoom;
    export let url;
    export let pages;
    export let current;
    export let mount;

    let map = {},
        titles = {},
        local = '',
        readme = '',
        page,
        title;

    Object.keys(pages).forEach(name => {
        Object.keys(pages[name]).forEach(item => {
            let key = url(name, pages[name][item].path || item);
            map[key] = pages[name][item];
            titles[key] = item;
        });
    });


$:{
    page = map[current],
    title = titles[current];
    readme = '';

    if (typeof page == 'function'){
        local = '';
        page({mount}, {});
        readme = '<p>xxx</p>';
    }

    if (typeof page == 'object'){
        local = '/' + page.path + '/';
    }
}


function adjustFrame(e){

    let frame = document.querySelector('iframe');
    frame.style.height = frame.contentDocument.documentElement.scrollHeight + 'px';

    readme = page.readme;
}


</script>

<style>

.fw-logo {
    position: absolute;
    top: 6.3rem;
    right: 40px;
    height: 3rem;
}

.title {
    position: absolute;
    top: 4.5rem;
    left: 13rem;
}

.frame-wrap {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 60px;
    margin: -60px;
    box-sizing: content-box;
}

.frame-wrap > iframe {
    height: 200px;
    margin: -60px;
    border: none;
}

.page {
    display: block;
    max-width: 46rem;
    margin: 20px auto 0;
}

</style>

{#if !zoom}
    <div class="title"><h1>{title}</h1></div>
    <img class="fw-logo" src={logo}>
{/if}

{#if !page}
    Not registered
{/if}

{#if local}
    <div class="frame-wrap">
        <iframe src={local} frameborder="0" scrolling="no" on:load={adjustFrame}></iframe>
    </div>
{/if}


{#if !zoom}
    <main class="page">{@html readme}</main>
{/if}
