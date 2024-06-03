import {PageLayoutEnum} from "../enums/PageLayoutEnum";
import {ActivatedRouteSnapshot, ResolveFn, RouterState, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {PageLayoutService} from "../../services/page-layout-services/page-layout.service";

export const setLayout = (inputLayout:  PageLayoutEnum): ResolveFn<void> => {
  return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    inject(PageLayoutService).setLayout(inputLayout)
  }
}
