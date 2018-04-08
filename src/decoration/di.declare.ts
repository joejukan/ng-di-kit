import {Type} from "@angular/core"
import {declarations} from "../globalization";
export function DIDeclare(){
    return function (type: {new (): any}) {
        declarations.push(type);
    }
}