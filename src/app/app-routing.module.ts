import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AbwesenheitComponent} from './component/abwesenheit/abwesenheit.component';
import {AbwesenheitenComponent} from './component/abwesenheiten/abwesenheiten.component';
import {ChildrenComponent} from './component/children/children.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {HomePage} from './component/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'children',
    component: ChildrenComponent,
  }, {
    path: 'abwesenheit/:id',
    component: AbwesenheitComponent,
  }, {
    path: 'abwesenheiten',
    component: AbwesenheitenComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
