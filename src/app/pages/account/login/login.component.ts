import {Component, OnInit} from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AccountService} from "../../../../services/account-services/account.service";
import {ILogin} from "../../../../interfaces/IAccounts/ILogin";
import {Router, RouterLink} from "@angular/router";
import {JsonPipe, NgIf} from "@angular/common";
import {NzMessageModule, NzMessageService} from "ng-zorro-antd/message";

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
    FormsModule,
    RouterLink,
    JsonPipe,
    NgIf,
    NzMessageModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  model!: ILogin
  loginData!: FormGroup

  constructor(private _accountService:AccountService, private _router:Router, private _message:NzMessageService) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.loginData = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  login(){
    this._message.loading("درحال ورود به حساب کاربری...", {nzDuration: 2000}).onClose.subscribe(()=>{
      this.model = {
        username: this.loginData.get('username')?.value,
        password: this.loginData.get('password')?.value
      }

      this._accountService.login(this.model).subscribe(() => {
        this._router.navigate(['/welcome'])
      })
    })
  }
}
