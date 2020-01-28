
import { tpl } from "@activewidgets/js";
import * as flags from '@activewidgets/examples/flags';


export function company({value}){
    return tpl`<div>
        <div class="line bold blue">${value.customerID}</div>
        <div class="line small">${value.companyName}</div>
    </div>`;
}


export function contact({value}){
    return tpl`<div>
        <div class="line bold">${value.contactName}</div>
        <div class="line small">${value.contactTitle}</div>
    </div>`;
}


export function address({value}){
    return tpl`<div>
        <div class="line small">${value.address}</div>
        <div class="line small">${value.postalCode} <span>${value.city}</span></div>
    </div>`;
}


export function country({value}){
    const src = flags[value];
    return tpl`<div class="country"><img src=${src}/>${value}</div>`;
}


export function phone({value}){
    return tpl`<div>
        <div class="line small phone">${value.phone}</div>
        <div class="line small fax">${value.fax}</div>
    </div>`;
}
