
import {Viewer} from '../../viewer/index.js';
import {mount as _mount} from '@activewidgets/js';
import * as pages from '../index.js';


function mount(tag, props){

    let container = document.getElementById('app'),
        target = document.createElement(tag);

    container.innerHTML = '';
    container.appendChild(target);

    _mount(target, props);
}


function clean(){
    let container = document.getElementById('app');
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
