import {Type} from "@angular/core"
import {importers} from "../globalization";
export function DIImport(){
    return function (type: {new (): any}) {
        importers.push(type);
    }
}