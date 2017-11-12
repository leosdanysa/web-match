import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-layout-header',
  templateUrl: 'layout-header.component.html',
  styleUrls: ['layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
  title = 'Leo';
  username = 'lesanchez';
  isLogged$: Observable<boolean>;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLogged$ = this.storageService.isAuthenticated;
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['login']);
  }
}
