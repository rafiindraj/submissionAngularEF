import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'profile',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'cart',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'notification',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./pages/notification/notification.module').then(m => m.NotificationModule)
  },
  { path: 'auth', loadChildren: () => import('./pages/page-login-reg/page-login-reg.module').then(m => m.PageLoginRegModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
