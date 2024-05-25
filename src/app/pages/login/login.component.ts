import { Component } from '@angular/core';
import {ILogin} from "../../../interfaces/IAccounts/ILogin";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AccountService} from "../../../services/account-services/account.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormDirective,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzColDirective,
    NzCheckboxComponent,
    NzRowDirective,
    NzButtonComponent,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: ILogin = {username: "", password: ""}

  constructor(private _accountService:AccountService) {}

  login(){
    this._accountService.login(this.loginData).subscribe(result => {
      console.log("Result => ", result)
    })
  }

}
