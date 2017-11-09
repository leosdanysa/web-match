import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Result, UserData, StorageService } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged: boolean;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    if (this.storageService.get() !== null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
