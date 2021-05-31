import { Component, Input, OnInit } from '@angular/core';
import { AppareilViewComponentComponent } from '../appareil-view-component/appareil-view-component.component';
import { AppareilService } from '../Service/appareil.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.scss']
})
export class AppareilComponentComponent implements OnInit {

  public appareils:any = []
  id:any;
  constructor(private appService: AppareilService, private route: ActivatedRoute){}

  ngOnInit() {
    this.appService.getMachines().subscribe(data => this.appareils = data);
    
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.appareils[this.id];
      console.log('appareil : ',this.appareils[this.id])
    });
  }

}
