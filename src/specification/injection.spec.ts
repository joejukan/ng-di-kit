import {SpecReporter} from "jasmine-spec-reporter";
import {Component, OnInit} from "@angular/core";
import {Route} from "@angular/router";
import {DIDeclare, DIProvide, DIExport, DIImport, DIRoute} from "../decoration";
import {declarations, routes, providers, importers, exporters} from "../globalization";

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec:{
        displaySuccessful: true,
        displayFailed: true,
        displayPending: true,
        displayDuration: true
    }
}));

class TestComponent implements OnInit {
    ngOnInit(): void {
    }
}

afterEach(done => {
    [declarations, routes, providers, importers, exporters]
    .forEach(array => array.splice(0, array.length));
    done();
})

Component({selector: 'test-component'})(TestComponent);

let globals = [declarations, providers, importers, exporters];
let names = ['Declaration', 'Provider', 'Import', 'Export'];
let decorators = [DIDeclare, DIProvide, DIImport, DIExport];

describe(`Decorator Dependency Injection`, () => {
    for (let i = 0; i < globals.length; i++) {
        let global = globals[i];
        let name = names[i];
        let decorator = decorators[i];

        it(`Adding Angular Component as ${name}`, done => {
            decorator()(TestComponent)
            expect(global.length).toEqual(1, `There should have been only 1 ${name}. 
            Instead there are ${global.length} found!`)
            done();
        });
    }
});

describe('Route Dependency Injection', () => {
    it('Add multiple paths to a DIRoute', done => {
        DIRoute({paths: ['/test/route', '/home/route']})(TestComponent);
        expect(routes.length).toEqual(2, `There should have been only 2 items in routes. 
        Instead, there are ${routes.length} found!`);
        done();
    });
});
