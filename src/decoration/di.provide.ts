import {Type} from "@angular/core"
import {providers} from "../globalization";
export function DIProvide(){
    return function (type: {new (...args): any}) {
        providers.push(type);
    }
}