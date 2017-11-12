import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.css']
})
export class LayoutFooterComponent implements OnInit {
  statistic: any = {
    entity: 'User',
    items: 3458,
    matches: 1548,
    mapped: 543,
    errors: 61
  };

  constructor() { }

  ngOnInit() {
  }

  onItemChanged() {

  }
}
