import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { machineModel } from '../model/machine';
import { AppareilService } from '../Service/appareil.service';

@Component({
  selector: 'app-appareil-view-component',
  templateUrl: './appareil-view-component.component.html',
  styleUrls: ['./appareil-view-component.component.scss']
})
export class AppareilViewComponentComponent implements OnInit {

  public date : Date | undefined;
  public appareils:any = []
  public value : any

  constructor(private appService: AppareilService, private route : Router) { }

  ngOnInit() {
    this.appService.getMachines().subscribe(data => this.appareils = data);
    this.appareils.title!;
    this.appareils.status!;
    console.log(this.appareils)
  }



  detail(id:any) {
    id = id - 1
    this.appareils[id]
    this.route.navigate(['appareils/detail/',id])
  }

  getStatusBtnColor(status: string) {
    switch(status) {
      case 'on':
        return 'green';
      default:
        return 'red';
    }
  }

  changeStatus(oldStatus: string, newStatus: string ) {
    console.log('old Status', oldStatus)
    console.log('new Status', newStatus)
    newStatus = this.appareils.status
    return newStatus
  }

  getStatus(id : number ,valeur?: any) {
    if(valeur == true) {
      id = id - 1
      this.appareils[id]
      this.appareils[id].status = 'on';
    }
    if(valeur == false) {
      id = id - 1
      this.appareils[id]
      this.appareils[id].status = 'off';
    }
  }

  switchOnAll(){
    // N.B. : un for Each serait mieux si 50 ou 100 éléments / données, mais possible pour le cas présent.
    this.appareils[0].status = 'on';
    this.appareils[1].status = 'on';
    this.appareils[2].status = 'on';
  }
  switchOffAll(){
    // N.B. : un for Each serait mieux si 50 ou 100 éléments / données, mais possible pour le cas présent.
    this.appareils[0].status = 'off';
    this.appareils[1].status = 'off';
    this.appareils[2].status = 'off';
  }
}
