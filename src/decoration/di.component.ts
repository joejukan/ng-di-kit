import {Type} from "@angular/core"
import {components} from "../globalization";
export function DIComponent(){
    return function (type: {new (): any}) {
        components.push(type);
    }
}