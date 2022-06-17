import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AbwesenheitComponent} from './component/abwesenheit/abwesenheit.component';
import {ChildrenListComponent} from './component/children-list/children-list.component';
import {ChildrenComponent} from './component/children/children.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {FormComponent} from './component/form/form.component';
import {HeaderComponent} from './component/header/header.component';
import {HomePage} from './component/home/home.page';
import {InputComponent} from './component/input/input.component';
import {ConfirmDirective} from './directive/confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ChildrenComponent,
    HeaderComponent,
    AbwesenheitComponent,
    ConfirmDirective,
    InputComponent,
    DashboardComponent,
    ChildrenListComponent,
    FormComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
