import {declarations, entries} from "../globalization";
import { DIDeclareOptions } from "../abstraction";
export function DIDeclare(options?:DIDeclareOptions){
    return function (type: {new (...args): any}) {
        declarations.push(type);
        if(options){
            if(options.isEntry){
                entries.push(type);
            }
        }
    }
}