import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { USERS_ROUTES } from './users.routes';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SharedModule } from '../shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(USERS_ROUTES),
    SharedModule,
    NgbAlertModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UsersModule {
}
