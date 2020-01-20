
<script>

    export let url;
    export let pages;
    export let data;
    export let current;
    export let render;

    let map = {}

    Object.keys(pages).forEach(name => {
        Object.keys(pages[name]).forEach(item => {
            map[url(name, item)] = pages[name][item];
        });
    });


    let fn = map[current];

    if (fn){
        fn({render}, {}, data);
    }

</script>


{#if !fn}
    Not registered
{/if}
