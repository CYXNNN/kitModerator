import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AbwesenheitComponent} from './component/abwesenheit/abwesenheit.component';
import {ChildrenComponent} from './component/children/children.component';
import {ConfirmDirective} from './directive/confirm/confirm.directive';
import {HeaderComponent} from './component/header/header.component';
import {HomePage} from './component/home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ChildrenComponent,
    HeaderComponent,
    AbwesenheitComponent,
    ConfirmDirective
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
