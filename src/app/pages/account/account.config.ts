import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './account.routes';
import {provideHttpClient} from "@angular/common/http";
import {NzConfig, provideNzConfig} from "ng-zorro-antd/core/config";

const nzConfig: NzConfig = {
}

export const accountConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideNzConfig(nzConfig)]
};
