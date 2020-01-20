
import {Viewer} from '../viewer/index.js';

const viewer = new Viewer({
    target: document.body,
    props: {
        msg: 'Hello World'
    }
});
