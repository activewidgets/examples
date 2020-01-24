
<script>

    export let logo = '';
    export let zoom;
    export let url;
    export let pages;
    export let current;
    export let mount;

    let map = {},
        titles = {};

    Object.keys(pages).forEach(name => {
        Object.keys(pages[name]).forEach(item => {
            map[url(name, item)] = pages[name][item];
            titles[url(name, item)] = item;
        });
    });

    let fn = map[current],
        title = titles[current];

    if (fn){
        fn({mount}, {});
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
    top: 5.5rem;
    left: 13rem;
}

</style>

{#if !zoom}
    <div class="title"><h1>{title}</h1></div>
    <img src={logo} class="fw-logo">

{/if}


{#if !fn}
    Not registered
{/if}
