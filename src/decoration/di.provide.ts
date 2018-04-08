import {Type} from "@angular/core"
import {providers} from "../globalization";
export function DIProvide(){
    return function (type: {new (): any}) {
        providers.push(type);
    }
}