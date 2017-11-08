import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  private TOKEN_KEY = 'token';

  constructor() { }

  save(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clear(): void {
    localStorage.clear();
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
