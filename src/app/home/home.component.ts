import { Component, ViewChild } from '@angular/core';
import { Result, UserData, ApiService, PhotoEntity } from '../shared';
import { MatPaginator, MatStepper, MatHorizontalStepper} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any = [];
  pagedItems: any = [];
  loading: boolean;
  @ViewChild('myStepper') myStepper: MatHorizontalStepper;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

    onFileLoaded(event) {
      console.log('File status: ' + event.status);
      if (event.status === 'loading') {
        // move to the next step
        this.loading = true;
        this.myStepper.next();
      } else if (event.status === 'loaded') {
        // this.apiService.get('/leosdanysa/json-mock/posts')
        // .map(response => response)
        this.apiService.get('/photos')
        .subscribe(response => {
          this.data = response as PhotoEntity[];

          // Grab the page's slice of data.
          const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

          const data = this.data.slice();
          this.pagedItems =  data.splice(startIndex, this.paginator.pageSize);

          this.loading = false;
          this.myStepper.next();
        }, error => {
          console.log('error');
          this.loading = false;
        });
      } else {
        this.data = null;
      }
    }

    onSubmit() {
      this.myStepper.next();
    }

    onPage(event) {
      // Grab the page's slice of data.
      const startIndex = event.pageIndex * event.pageSize;

      const data = this.data.slice();
      this.pagedItems =  data.splice(startIndex, this.paginator.pageSize);
    }

    onEntityChange(entity: any) {
      console.log(entity);

      const userData = this.data.resultData.filter(data => data.sourceId === entity.parentId)[0] as UserData;

      const userEntity = userData.matches.find(user => user.personId === entity.entityMatch.personId);
      userEntity.match = !entity.entityMatch.match;

      const notMatches = userData.matches.filter(user => user.personId !== entity.entityMatch.personId);

      for (const item of notMatches) {
        item.match = false;
      }
    }
}
