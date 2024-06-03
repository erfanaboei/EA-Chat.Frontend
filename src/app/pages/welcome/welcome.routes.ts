import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {UsersComponent} from "../users/users.component";

export const WELCOME_ROUTES: Routes = [
  { path: '', pathMatch: "full", component: WelcomeComponent },
  { path: 'users', component: UsersComponent },
];
