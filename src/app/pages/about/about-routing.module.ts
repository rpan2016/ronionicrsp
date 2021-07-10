import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@ruf/idp-auth';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
