import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {PageLayoutService} from "../services/page-layout-services/page-layout.service";
import {PageLayoutEnum} from "../layouts/enums/PageLayoutEnum";
import {AppLayoutComponent} from "../layouts/app-layout/app-layout.component";
import {AccountLayoutComponent} from "../layouts/account-layout/account-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, RouterLink, AppLayoutComponent, AccountLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public _pageLayoutService: PageLayoutService) {
  }

  ngOnInit(): void {}

  protected readonly PageLayoutEnum = PageLayoutEnum;
}
