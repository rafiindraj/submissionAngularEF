import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginRegComponent } from './page-login-reg.component';

const routes: Routes = [{ path: '', component: PageLoginRegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoginRegRoutingModule { }
