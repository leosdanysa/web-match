import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
// import {UserData} from './result';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserData, EntityUser } from '../model';
import { UserDataSource } from '../datasources';
import { HeaderData } from '../model';
import { PhotoEntity } from '../model';

@Component({
  selector: 'app-entity-expansion-panel',
  templateUrl: './entity-expansion-panel-component.html',
  styleUrls: ['./entity-expansion-panel-component.css']
})
export class EntityExpansionPanelComponent implements OnInit {
  @Input() data: PhotoEntity;
  @Output() onStatusChanged: EventEmitter<any> = new EventEmitter();

  selectedEntity: EntityUser = null;
  displayedColumns: Array<string> = [];
  // datasource: UserDataSource;
  selectedRowIndex: number = -1;
  @Input() step = 0;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // this.datasource = new UserDataSource(this.data.matches as EntityUser[], this.paginator);
    // this.datasource = new UserDataSource([] as EntityUser[], this.paginator);
    // this.displayedColumns = this.datasource.columns;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  changeStatus(entity: EntityUser) {
    // entity.match = !entity.match;
    const eventData: any = {
      // 'parentId': this.data.sourceId,
      'entityMatch': entity
    };

    // this.datasource.dataChanged(this.userData.matches.slice());

    this.onStatusChanged.emit(eventData);
  }

  selectedRow(entity: EntityUser) {
    console.log('Entity selected: ' + entity.personId);
    this.selectedRowIndex = entity.personId;

    this.selectedEntity = entity;
  }
}
