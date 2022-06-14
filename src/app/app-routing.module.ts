import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AbwesenheitComponent} from './component/abwesenheit/abwesenheit.component';
import {ChildrenComponent} from './component/children/children.component';
import {HomePage} from './component/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }, {
    path: 'children',
    component: ChildrenComponent
  },{
    path: 'abwesenheit/:id',
    component: AbwesenheitComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
