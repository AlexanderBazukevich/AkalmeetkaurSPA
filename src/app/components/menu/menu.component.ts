import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  menuItems;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.menuItems = this.service.getPages();
  }

  onChange(value: string): void {
    this.service.setPageTitle(value);
  }
}
