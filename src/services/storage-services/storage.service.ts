import { Injectable } from '@angular/core';
import {IUser} from "../../interfaces/IUsers/IUser";

const USER_KEY = "USER"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(){
    localStorage.clear()
  }

  saveUser(user:IUser){
    localStorage.removeItem(USER_KEY)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  getUser():IUser | null{
    const user = localStorage.getItem(USER_KEY)
    if(user){
      return JSON.parse(user)
    }
    return null
  }

  isLoggedIn(): boolean{
    const user = localStorage.getItem(USER_KEY)
    return !!user;
  }
}
