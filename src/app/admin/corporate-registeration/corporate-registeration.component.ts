import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-registeration',
  templateUrl: './corporate-registeration.component.html',
  styleUrls: ['./corporate-registeration.component.css']
})
export class CorporateRegisterationComponent implements OnInit {

  constructor() { 
    console.log("inside constructor");
  }

  ngOnInit(): void {
    console.log("inside ngonit");
  }

}
