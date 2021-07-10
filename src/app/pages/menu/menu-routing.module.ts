import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@ruf/idp-auth';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'products',
        canActivate: [AuthGuard],
        loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'about',
        canActivate: [AuthGuard],
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
