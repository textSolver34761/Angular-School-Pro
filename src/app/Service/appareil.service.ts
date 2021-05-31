import { Injectable } from '@angular/core';
import { machineModel } from '../model/machine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor(private http: HttpClient) { }

  private _url: string = "/assets/data/appareil.json";

getMachines() :Observable<machineModel[]> {
  return this.http.get<machineModel[]>(this._url);
}

}
