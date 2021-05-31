import { Component, OnInit } from '@angular/core';
import { AppareilViewComponentComponent } from '../appareil-view-component/appareil-view-component.component';

@Component({
  selector: 'app-create-appareil',
  templateUrl: './create-appareil.component.html',
  styleUrls: ['./create-appareil.component.scss']
})
export class CreateAppareilComponent implements OnInit {

  appareils : {name:string, status:string} = { name: "", status: ""};

  constructor(public data : AppareilViewComponentComponent) { }

  ngOnInit(): void {
  }

}
