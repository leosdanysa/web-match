import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Output() onFileLoaded: EventEmitter<any> = new EventEmitter();

  entities = [
    {value: 'org', viewValue: 'Org'},
    {value: 'academicSession', viewValue: 'Academic Session'},
    {value: 'user', viewValue: 'User'},
    {value: 'class', viewValue: 'Class'},
    {value: 'demographic', viewValue: 'Demographic'},
    {value: 'enrollment', viewValue: 'Enrollment'},
    {value: 'course', viewValue: 'course'}
  ];

  currentFile: File;
  selectedFile = 'Open File';
  selectedEntity: string ;
  enableUpload = false;
  loading: boolean;

  constructor(private apiService: ApiService) {}

  selectFile(event): void {
    this.currentFile = event.target.files.item(0);

    this.selectedFile = this.currentFile.name;

    this.enableButton();
  }

  onChange(event) {
    if (this.entities.find(entity => entity.value === event.value)) {
      this.selectedEntity = event.value;

      console.log(this.selectedEntity);
    } else {
      this.selectedEntity = null;
    }

    this.enableButton();
  }

  private enableButton(): void {
    this.enableUpload = (this.currentFile && this.selectedEntity != null) ? true : false;
  }

  upload(): void {
    this.loading = true;
    console.log('Uploading file.');

    const formData: FormData = new FormData();
    formData.append('file', this.currentFile);

    // this.apiService.postFile('/file', formData).subscribe();

    this.onFileLoaded.emit({'status': true});
  }
}
