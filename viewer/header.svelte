
<script>

export let pkg = {};

let version = pkg.version,
    name = String(pkg.name).split('/')[1];


function click(event){
    if (document.body.offsetWidth > 899){
        return;
    }
    event.preventDefault();

    let el = document.querySelector('.sidebar'),
        visible = window.getComputedStyle(el).display == 'block';

    el.style.display = visible ? 'none' : 'block';
}

</script>

<style>

:global(body) {
    padding-top: 12rem;
}

:global(@media (max-width: 899px) { body {
    padding-top: 10rem;
}})

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5.0625rem;
    padding: .4rem 1.5rem;
    line-height: 2.6rem;
    border-top: 1.625rem solid #09f;
    border-bottom: 1px solid #000;
    box-shadow: inset 0 1px #06c, inset 0 2px #666;
    background: #4d4d4d url(https://activewidgets.com/include/patterns/darkdenim-1.png);
    z-index: 20;
}


.version {
    position: fixed;
    top: 0;
    left: 1.6rem;
    font: 0.6875rem Tahoma;
    line-height: 1.625rem;
    color: #bdf;
    z-index: 21;
}

.logo {
    height: 40px;
    vertical-align: middle;
}

.links {
    position: absolute;
    top: 0.4rem;
    right: 1.5rem;
    font-family: 'Montserrat', 'MS Reference Sans Serif', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 600;
}

.links a {
    display: inline-block;
    position: relative;
    padding: 0 0.4rem;
    margin: 0 0.1rem;
    line-height: 1.3rem;
    text-decoration: none;
    color: #ddd;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
}

.links a:hover {
    border-bottom: 3px solid #999;
}

.links a.active {
    border-bottom: 3px solid #f90;

}

.shade {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 0.5rem;
    margin-top: 1px;
    background: linear-gradient(#fff, transparent);
}


@media (max-width: 899px) {
    .navbar {
        border-top: none;
        background: #4d4d4d;
        height: 3.5rem;
    }

    .version, .links, .shade {
        display: none;
    }
}


</style>

<header class="navbar">
    <a href="https://activewidgets.com/" class="home-link" on:click={click}>
        <img src="https://activewidgets.com/include/logo/aw-logo-40.png" class="logo" alt="home">
    </a>
    <div class="links">
        <a href="https://activewidgets.com/messages/">Forum</a>
        <a href="https://docs.activewidgets.com/examples/" class="active">Demo</a>
        <a href="https://docs.activewidgets.com/guide/">Guide</a>
        <a href="https://docs.activewidgets.com/api/">API</a>
        <a href="https://activewidgets.com/licenses/">Store</a>
    </div>
    <div class="shade"></div>
</header>

<div class="version">
     {version} ({name})
</div>

