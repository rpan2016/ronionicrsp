import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@ruf/idp-auth';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
