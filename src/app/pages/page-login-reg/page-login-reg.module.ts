import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRegRoutingModule } from './page-login-reg-routing.module';
import { PageLoginRegComponent } from './page-login-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageLoginRegComponent
  ],
  imports: [
    CommonModule,
    PageLoginRegRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PageLoginRegModule { }
