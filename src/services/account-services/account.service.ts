import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../../interfaces/IAccounts/ILogin";
import {IRegister} from "../../interfaces/IAccounts/IRegister";
import {map, ReplaySubject} from "rxjs";
import {IUser} from "../../interfaces/IUsers/IUser";
import {IRequestResult} from "../../interfaces/IRequestResult/IRequestResult";
import {StorageService} from "../storage-services/storage.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = "https://localhost:44318/Api/Account";

  private currentUserSource = new ReplaySubject<IUser>()

  currentUser = this.currentUserSource.asObservable()

  constructor(private _httpClient: HttpClient,
              private _storageService: StorageService,
              private _message:NzMessageService,
              private _router:Router) { }

  login(data:ILogin){
    return this._httpClient.post(`${this.baseUrl}/Login`, data).pipe(map((response)=> {
      const userResponse:IRequestResult = <IRequestResult>response
      console.log("test", response)
      const user:IUser = <IUser>userResponse.data
      if(userResponse.isSuccess){
        this._storageService.saveUser(user)
        this.currentUserSource.next(user)
        this._message.success('با موفقیت وارد حساب کاربری خود شدید', {nzDuration: 2000})
      }else{
        this._message.error(userResponse.message, {nzDuration: 2000})
      }
    }))
  }

  register(data: IRegister){
    return this._httpClient.post(`${this.baseUrl}/Register`, data).pipe(map((response)=>{
      const registerResponse: IRequestResult = <IRequestResult>response;
      console.log("Response => ", registerResponse)
      if(registerResponse.isSuccess){
        this._message.success('ثبت نام شما با موفقیت انجام شد', {nzDuration: 2500});
        this._router.navigate(['/account'])
      }else{
        this._message.error(registerResponse.message, {nzDuration: 2500})
      }
    }))
  }

  logout(){
    this._storageService.clean()
    this.currentUserSource.next({} as IUser)
  }

  setCurrentUser(user:IUser){
    this.currentUserSource.next(user)
  }
}
