import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces/IUsers/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users!: IUser[];
  User!: IUser;

  BaseUrl = "https://localhost:44318/Api/User";

  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.BaseUrl}/GetAllUsers`)
  }

  GetUserById(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.BaseUrl}/GetUserById/${id}`);
  }
}
