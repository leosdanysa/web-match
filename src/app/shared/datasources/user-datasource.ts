import { DataSource } from '@angular/cdk/collections';
import { EntityUser } from '../';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';

export class UserDataSource extends DataSource<any> {
  dataChange: BehaviorSubject<EntityUser[]> = new BehaviorSubject<EntityUser[]>([]);

  public columns = [
    'personId',
    'firstName',
    'lastName',
    /*'emailAddress',
    'dateOfBirth',
    'institutionId',*/
    'matchingScore',
    'actionsColumn'];

  constructor(private data: Array<EntityUser> = [], private paginator: MatPaginator) {
    super();
  }

  dataChanged(data: EntityUser[]): void {
    this.dataChange.next(data);
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  connect(): Observable<EntityUser[]> {
    const displayDataChanges = [
      this.dataChange,
      this.paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.data.slice();

      // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    });
  }

  disconnect() {}
}
