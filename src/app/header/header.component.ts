import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  public data;
  constructor() { }

  collapsed = true;

  bmData = [
    { "bmtitle": "Sales & Marketing", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Consumer Care", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Consumer Ops", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Sourcing", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Operations & Management", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Assets", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Purchase", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "HCM", "description": "Lorem ipsum dolor sit amet," },
    { "bmtitle": "Finance", "description": "Lorem ipsum dolor sit amet," }
  ];

  ngOnInit(): void {
    
  }
  discoverClicked($emit){
    console.log("button clicked");
    this.data =  (<HTMLInputElement>event.target).value;
    console.log(this.data);
  }

}