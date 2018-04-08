import {Component, OnInit} from "@angular/core";
import {Route} from "@angular/router";
import {DIComponent, DIRoute} from "../decoration";
import {components, routes} from "../globalization"


class TestComponent implements OnInit {
    ngOnInit(): void {
    }
}


afterEach(done => {
    components.splice(0, components.length);
    routes.splice(0, routes.length);
    done();
})
Component({selector: 'test-component'})(TestComponent);
describe('Test Component Dependency Injection', () => {
    it('Effect of Angular Component', done => {
        
        DIComponent()(TestComponent)
        expect(components.length).toEqual(1, `There should have been only 1 item in components. 
        Instead there are ${components.length} found!`)
        done();
    });
});

describe('Test Route Dependency Injection', () => {
    it('Add multiple paths to a DIRoute', done => {
        DIRoute({paths: ['/test/route', '/home/route']})(TestComponent);
        expect(routes.length).toEqual(2, `There should have been only 2 items in routes. 
        Instead, there are ${routes.length} found!`);
        done();
    });
});
