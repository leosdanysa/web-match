import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class StorageService {

  private TOKEN_KEY = 'token';
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
    if (localStorage.getItem(this.TOKEN_KEY) !== null) {
      this.isAuthenticatedSubject.next(true);
    }
   }

  save(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);

    this.isAuthenticatedSubject.next(true);
  }

  get(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clear(): void {
    localStorage.clear();

    this.isAuthenticatedSubject.next(false);
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
