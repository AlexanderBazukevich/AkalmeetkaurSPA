import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: []
})
export class LogoComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  //TODO how to avoid duplication of this method with menu component???
  onClick(value: string): void {
    this.service.setPageTitle(value);
  }
}
