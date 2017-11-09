import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private user = 'user';
  private password = 'password';

  constructor(private apiService: ApiService, private storageService: StorageService) { }

  login(username: string, password: string ): Observable<boolean> {

    // Call server api to authenticate

    // On login success rediret to home
    return new Observable<boolean>(observer => {
      if (this.user === username && this.password === password) {
        // Store authentication in local storage
        this.storageService.save(this.user + ':' + this.password);

        return observer.next(true);
      } else {
        return observer.next(false);
      }
    });
  }

  logout(): void {
    // Remove token from local storage
    this.storageService.clear();
  }
}
