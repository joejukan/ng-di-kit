import {Type} from "@angular/core"
import {exporters} from "../globalization";
export function DIExport(){
    return function (type: {new (): any}) {
        exporters.push(type);
    }
}