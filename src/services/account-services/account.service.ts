import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../../interfaces/IAccounts/ILogin";
import {IRegister} from "../../interfaces/IAccounts/IRegister";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = "https://localhost:44318/Api/Account";

  constructor(private _httpClient: HttpClient) { }

  login(data:ILogin){
    return this._httpClient.post(`${this.baseUrl}/Login`, data)
  }

  register(data: IRegister){
    return this._httpClient.post(`${this.baseUrl}/Register`, data)
  }

}
