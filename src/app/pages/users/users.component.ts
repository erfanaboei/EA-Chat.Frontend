import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NzTableComponent, NzTbodyComponent, NzTheadComponent} from "ng-zorro-antd/table";
import {IUser} from "../../../interfaces/IUsers/IUser";
import {UserService} from "../../../services/user-services/user.service";

@Component({
  selector: 'app-users',
  standalone: true,
    imports: [
        NgForOf,
        NzTableComponent,
        NzTbodyComponent,
        NzTheadComponent
    ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  Users!: IUser[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.GetAllUsers().subscribe(data=> this.Users = data );
  }
}
