import {Type} from "@angular/core"
import {importers} from "../globalization";
export function DIImport(){
    return function (type: {new (...args): any}) {
        importers.push(type);
    }
}