# Angular Dependency Injection Kit
This library allows Angular developers to inject Components, Services and Modules to the main angular 
app via decorators.<br/>
The library provides a number of decorators and corresponding global arrays to allow for a cleaner injection in the main **Angualr App Module**.
|Decorator        |Global Array         |Description                                           |
|-----------------|---------------------|------------------------------------------------------|
|**DIDeclare**    |**declarations**     |Injects components into the App Module as declarations|
|**DIProvide**    |**providers**        |Injects services into the App Module as providers     |
|**DIRoute**      |**routes**           |Injects components into the App Module as routes      |
|**DIImport**     |**importers**        |Injects modules into the App Module as imports        |
|**DIExport**     |**exporters**        |Injects components into the App Module as exports     |<br/>

**NOTE**<br/>
The user defined components, services and modules using these decorators must be imported into the **Angular App Module**.<br/>
This will allow the decorators to push the user defined entities to their respective global arrays.<br/><br/>
Therefore, it is **recommended** to use an [indexer](https://www.npmjs.com/package/ts-indexer) and [import as](#importas) technique.<br/><br/>

## Installation
Do the following steps to install **ng-di-kit**:
```
npm install ng-di-kit
```

## Usage
**login.component.ts**
``` typescript
import { DIDeclare } from "ng-di-kit";
import { Component, OnInit } from '@angular/core';

@DIDeclare()
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    ngOnInit() {

    }
}
```

**login.service.ts**
``` typescript
import { DIProvide } from 'ng-di-kit';
import { Injectable } from '@angular/core';

@DIProvide()
@Injectable()
export class LoginService  {

}
```

**users.component.ts**
``` typescript
import { DIRoute } from "ng-di-kit";
import { Component, OnInit } from '@angular/core';

@DIRoute()
@Component({
  selector: 'users-component',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    ngOnInit() {

    }
}
```

**index.ts**
```typescript
export * from './login.component'
export * from './login.service'
export * from './users.component'
```

**app.module.ts** <a name="importas"></a>
```typescript
import * as components from './index';
import { declarations, providers, importers, routes } from 'ng-di-kit';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// expose the components, modules and services to allow application of decorators
for(let key in components){
  components[key];
}

importers.push(BrowserModule);
importers.push(HttpClientModule);
importers.push(RouterModule.forRoot(routes));

@NgModule({
  imports:      importers,
  providers:    providers,
  declarations: declarations,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Authors
**01)** **Joseph Eniojukan** - [joejukan](https://github.com/joejukan)<br/><br/>

## License
This project is licensed under the ISC License - see the [LICENSE.md](https://github.com/joejukan/ng-di-kit/blob/master/LICENSE.md) file for details

Copyright 2018 Joseph Eniojukan

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.