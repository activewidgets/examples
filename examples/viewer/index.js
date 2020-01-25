
import {Viewer} from '../../viewer/index.js';
import {mount as _mount} from '@activewidgets/js';
import * as pages from './examples.js';
import readme from '../README.md';
import logo from './framework.svg';
import pkg from '../../package.json';

let container = document.getElementById('app');

container.innerHTML = '';


function mount(tag, props){

    let target = document.createElement(tag);

    container.innerHTML = '';
    container.appendChild(target);

    _mount(target, props);
}


function clean(){
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pkg, logo, readme, pages, mount, clean}
});
