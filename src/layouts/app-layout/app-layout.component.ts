import { Component } from '@angular/core';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuDividerDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {NzDropDownDirective, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {AccountService} from "../../services/account-services/account.service";
import {NzModalRef, NzModalService, NzModalModule} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterLink,
    RouterOutlet,
    NgOptimizedImage,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzFooterComponent,
    NzDropdownMenuComponent,
    NzMenuDividerDirective,
    NzDropDownDirective,
    NzModalModule
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
  styles: [
    `
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 360px;
      }

      nz-footer {
        text-align: center;
      }
    `
  ]
})
export class AppLayoutComponent {
  isCollapsed: boolean = true
  confirmModal?:NzModalRef
  constructor(private _accountService:AccountService, private _modal:NzModalService, private _router:Router) {
  }

  logout(){
    this.confirmModal = this._modal.confirm({
      nzTitle: "خروج از حساب کاربری",
      nzContent: "آیا میخواهید از حساب کاربری خود خارج شوید؟",
      nzCancelText: "لغو",
      nzOkText: "خروج",
      nzOnOk: ()=> {
        this._accountService.logout()
        this._router.navigate(['/account'])
      }
    })
  }
}
