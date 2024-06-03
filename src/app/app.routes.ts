import {Routes} from '@angular/router';
import {setLayout} from "../layouts/resolvers/LayoutResolver";
import {PageLayoutEnum} from "../layouts/enums/PageLayoutEnum";
import {AuthGuard} from "../auth/auth-guard";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.routes').then(m => m.ACCOUNT_ROUTES),
    resolve: {
      layout: setLayout(PageLayoutEnum.AccountLayout)
    }
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES),
    resolve: {
      layout: setLayout(PageLayoutEnum.AppLayout)
    },
    canActivate: [AuthGuard]
  },
];
