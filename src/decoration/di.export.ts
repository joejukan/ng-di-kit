import {exporters} from "../globalization";
export function DIExport(){
    return function (type: {new (...args): any}) {
        exporters.push(type);
    }
}