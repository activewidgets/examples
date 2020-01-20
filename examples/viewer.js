
import {Viewer} from '../viewer/index.js';
import {mount} from '@activewidgets/js';
import * as pages from './index.js';
import * as northwind from './northwind.js';

let data = {northwind};

function render(tag, props){

    let container = document.getElementById('app'),
        target = document.createElement(tag);

    container.innerHTML = '';
    container.appendChild(target);

    return mount(target, props);
}


function clean(){
    let container = document.getElementById('app');
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, data, render, clean}
});
