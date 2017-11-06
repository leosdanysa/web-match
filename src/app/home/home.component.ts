import { Component } from '@angular/core';
import { Result, UserData, ApiService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myData: Result = null;

  constructor(private apiService: ApiService) { }

    onFileLoaded(event) {
      if (event.status === true) {
        this.apiService.get('/leosdanysa/json-mock/posts')
        .map(response => response)
        .subscribe(response => {
          this.myData = response as Result;
        });
      } else {
        this.myData = null;
      }
    }

    onEntityChange(entity: any) {
      console.log(entity);

      const userData = this.myData.resultData.filter(data => data.sourceId === entity.parentId)[0] as UserData;

      const userEntity = userData.matches.find(user => user.personId === entity.entityMatch.personId);
      userEntity.match = !entity.entityMatch.match;
    }
}
