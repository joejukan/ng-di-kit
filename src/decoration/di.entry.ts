import {entries} from "../globalization";
export function DIEntry(){
    return function (type: {new (...args): any}) {
        entries.push(type);
    }
}