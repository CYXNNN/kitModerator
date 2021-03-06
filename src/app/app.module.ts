import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AbwesenheitListComponent} from './component/abwesenheit-list/abwesenheit-list.component';
import {AbwesenheitComponent} from './component/abwesenheit/abwesenheit.component';
import {AbwesenheitenComponent} from './component/abwesenheiten/abwesenheiten.component';
import {AvatarComponent} from './component/avatar/avatar.component';
import {ChildrenCardComponent} from './component/children-card/children-card.component';
import {ChildrenListComponent} from './component/children-list/children-list.component';
import {ChildrenSelectComponent} from './component/children-select/children-select.component';
import {ChildrenComponent} from './component/children/children.component';
import {CustomerInfoComponent} from './component/customer-info/customer-info.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {FormComponent} from './component/form/form.component';
import {HeaderComponent} from './component/header/header.component';
import {HomePage} from './component/home/home.page';
import {InputTextareaComponent} from './component/input-textarea/input-textarea.component';
import {InputComponent} from './component/input/input.component';
import {TextboxComponent} from './component/textbox/textbox.component';
import {ConfirmDirective} from './directive/confirm.directive';
import {TranslatePipe} from './pipes/translate.pipe';

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
    TextboxComponent,
    AbwesenheitListComponent,
    AbwesenheitenComponent,
    ChildrenCardComponent,
    AvatarComponent,
    TranslatePipe,
    ChildrenSelectComponent,
    CustomerInfoComponent,
    InputTextareaComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    RouterTestingModule,
    TranslatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
