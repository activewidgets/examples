
import { mount } from "@activewidgets/js";
import "./styles.css";

let rows = [{
    message: 'Hello, World!'
}];

mount('ax-datagrid', {rows});