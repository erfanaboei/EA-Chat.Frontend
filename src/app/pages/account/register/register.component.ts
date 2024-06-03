import {Component, OnInit} from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {
  AbstractControl,
  Form, FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule, ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {IRegister} from "../../../../interfaces/IAccounts/IRegister";
import {AccountService} from "../../../../services/account-services/account.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NzMessageModule, NzMessageService} from "ng-zorro-antd/message";

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
        NzButtonComponent,
        NgIf,
        ReactiveFormsModule,
        RouterLink,
        NzMessageModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  model!: IRegister;
  registerData!: FormGroup;

  constructor(private _accountService: AccountService, private formBuilder:FormBuilder, private _message:NzMessageService) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.registerData = this.formBuilder.group({
        username: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        mobile: ["", [Validators.required, Validators.pattern("^09[0|1|2|3|9][0-9]{8}$")]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]],
        rePassword: ["", [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), this.validateConfirmPassword]]
      }
    )
  }

  register(){
    this._message.loading('لطفا چند لحظه منتظر بمانید...').onClose.subscribe(()=> {
      this.model = {
        username: this.registerData.get('username')?.value,
        email: this.registerData.get('email')?.value,
        mobile: this.registerData.get('mobile')?.value,
        password: this.registerData.get('password')?.value,
        rePassword: this.registerData.get('rePassword')?.value,
      }

      console.log("Data => ", this.model)

      this._accountService.register(this.model).subscribe((result)=> {
        console.log("Result =>", result)
      })
    })
  }

  validateConfirmPassword:ValidatorFn=(formGroup: AbstractControl): ValidationErrors | null =>{
    if(formGroup.get('password') === formGroup.get('rePassword')){
      formGroup.get('rePassword')?.setErrors(null)
    }else{
      formGroup.get('rePassword')?.setErrors({passwordNoMatch: true})
    }
    return null
  }
}
