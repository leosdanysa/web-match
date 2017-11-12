import { HeaderData } from './header-data';

export class PhotoEntity implements HeaderData {
  headerTitle: string;
  headerDescription: string;
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor() {
    this.headerTitle = this.title;
    this.headerDescription =  this.albumId + ' - ' + this.url;
  }
}
