import {omit} from "underscore";
import {DIRouteOptions} from "../abstraction";
import {routes} from "../globalization"
export function DIRoute (options:DIRouteOptions){
    return function (type: {new (): any}) {
        options.component = type;
        if(options.path){
            routes.push(options);
        }
        if(Array.isArray(options.paths)){
            let paths = options.paths;
            paths.forEach(path => {
                let route = omit(options, 'paths');
                route.path = path;
                routes.push(route);
            });
        }
        
        return type;
    }
}