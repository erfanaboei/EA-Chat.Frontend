import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user-services/user.service";
import {IUser} from "../../../interfaces/IUsers/IUser";
import {NzTableComponent, NzTbodyComponent, NzTheadComponent} from "ng-zorro-antd/table";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    NzTableComponent,
    NzTheadComponent,
    NzTbodyComponent,
    NgForOf
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Users!: IUser[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.GetAllUsers().subscribe(data=> this.Users = data);
  }

}
