import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {StorageService} from "../services/storage-services/storage.service";

export const AuthGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  if (!storageService.isLoggedIn()) {
    router.navigate(['/account']);
    return false;
  }

  return storageService.isLoggedIn();
};
