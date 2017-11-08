import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.storageService.get() !== null) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
