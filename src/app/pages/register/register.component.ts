import { Component } from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {Form, FormControl, FormGroup, FormsModule, NonNullableFormBuilder} from "@angular/forms";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {IRegister} from "../../../interfaces/IAccounts/IRegister";
import {AccountService} from "../../../services/account-services/account.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzFormLabelComponent,
    NzFormItemComponent,
    FormsModule,
    NzFormDirective,
    NzColDirective,
    NzInputDirective,
    NzButtonComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData: IRegister = {username: '', email: '', mobile: '', password: '', rePassword: ''}

  constructor(private _accountService: AccountService) {}

  register(){
    this._accountService.register(this.registerData).subscribe(result => {
      console.log("Register Result => ", result)
    })
  }

  validateConfirmPassword(){
    return this.registerData.password == this.registerData.rePassword
  }
}
