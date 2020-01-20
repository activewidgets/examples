
<script>

    export let url;
    export let pages;
    export let data;
    export let current;
    export let render;

    let sections = Object.keys(pages).map(name => ({
        name,
        items: Object.keys(pages[name]).map(item => ({
            item,
            url: url(name, item)
        }))
    }));

</script>

<style>

.menu-header {
    line-height: 2em;
}

.menu-item {
    line-height: 1.5em;
    text-indent: 2em;
}

</style>

<div>
{#each sections as {name, items}}
    <div class="menu-header">{name}</div>
    {#each items as {item, url}}
        <div class="menu-item"><a href="/examples/{url}">{item}</a></div>
    {/each}
{/each}
</div>