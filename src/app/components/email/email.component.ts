import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: []
})
export class EmailComponent implements OnInit {

  email = new FormControl('', [
      Validators.email
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
