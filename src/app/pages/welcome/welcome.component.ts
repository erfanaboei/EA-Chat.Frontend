import { Component, OnInit } from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {StorageService} from "../../../services/storage-services/storage.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    NzMenuDirective,
    NzSubMenuComponent,
    NzMenuItemComponent,
    RouterLink,
    NzHeaderComponent,
    NzIconDirective,
    NzContentComponent,
    RouterOutlet
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private _storageService:StorageService, private _router:Router) { }

  ngOnInit() {

  }

}
