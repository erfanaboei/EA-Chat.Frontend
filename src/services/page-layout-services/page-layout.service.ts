import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {PageLayoutEnum} from "../../layouts/enums/PageLayoutEnum";

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  private layoutSubject = new Subject<PageLayoutEnum>()

  layout$ = this.layoutSubject.asObservable()

  constructor() { }

  setLayout(value: PageLayoutEnum){
    this.layoutSubject.next(value)
  }
}
