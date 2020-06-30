
<script>

    export let framework;
    export let url;
    export let pages;

    let sections = Object.keys(pages).map(name => ({
        name: name == 'Local' ? framework : name,
        items: Object.keys(pages[name]).map(item => ({
            item,
            url: url(name, pages[name][item].path || item)
        }))
    }));

    function click(event){
        if (document.body.offsetWidth > 899){
            return;
        }

        let el = document.querySelector('.sidebar'),
            visible = window.getComputedStyle(el).display == 'block';

        el.style.display = visible ? 'none' : 'block';
    }

</script>

<style>

:global(body) {
    padding-left: 250px;
}

:global(@media (max-width: 899px) { body {
    padding-left: 20px;
}})


.sidebar {
    position: fixed;
    overflow: auto;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 250px;
    padding: 60px 20px;
    font-size: 11pt;
}

@media (max-width: 899px) { .sidebar {
    display: none;
    border-right: 1px solid #ccc;
    background: #fff;
    z-index: 20;
}}

.menu-header {
    line-height: 2em;
    margin-top: 1.5em;
    font-weight: 600;
}

.menu-item {
    line-height: 1.5em;
    text-indent: 2em;
}


.sidebar-links {
    display: none;
    padding: 0 0 30px 0;
    margin-top: -30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
}

@media (max-width: 899px) { .sidebar-links {
    display: block;
}}

.sidebar-links a {
    display: block;
    line-height: 1.7em;
}

</style>

<aside class="sidebar" on:click={click}>

    <div class="sidebar-links">
        <a href="https://activewidgets.com/">Home</a>
        <a href="https://activewidgets.com/messages/">Forum</a>
        <a href="https://docs.activewidgets.com/examples/" class="active">Demo</a>
        <a href="https://docs.activewidgets.com/guide/">Guide</a>
        <a href="https://docs.activewidgets.com/api/">API</a>
        <a href="https://activewidgets.com/licenses/">Store</a>
    </div>

    <div><a href="/">Examples</a></div>

    {#each sections as {name, items}}
        <div class="menu-header">{name}</div>
        {#each items as {item, url}}
            <div class="menu-item"><a href="/examples/{url}/">{item}</a></div>
        {/each}
    {/each}
</aside>
