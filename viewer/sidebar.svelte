
<script>

    export let url;
    export let pages;

    let sections = Object.keys(pages).map(name => ({
        name,
        items: Object.keys(pages[name]).map(item => ({
            item,
            url: url(name, item)
        }))
    }));

</script>

<style>

:global(body) {
    padding-left: 200px;
}

.sidebar {
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 0;
    width: 200px;
    padding: 20px;
    font-size: 11pt;
}

.menu-header {
    line-height: 2em;
    margin-top: 1.5em;
    font-weight: 600;
}

.menu-item {
    line-height: 1.5em;
    text-indent: 2em;
}

</style>

<aside class="sidebar">

    <div><a href="/">Home</a></div>

    {#each sections as {name, items}}
        <div class="menu-header">{name}</div>
        {#each items as {item, url}}
            <div class="menu-item"><a href="/examples/{url}">{item}</a></div>
        {/each}
    {/each}
</aside>
