import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account.component";

export const ACCOUNT_ROUTES: Routes = [
  { path: '', redirectTo: "/account/login", pathMatch: "full" },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
