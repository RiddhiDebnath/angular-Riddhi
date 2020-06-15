import { Component, OnInit, Input } from '@angular/core';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import * as $ from 'jquery';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

 //faPlus = faPlus;
  @Input() data: any;
  constructor() {}

  status: boolean = false;
  
  ngOnInit(): void {
    

}
}