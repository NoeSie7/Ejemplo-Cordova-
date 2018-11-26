import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  getProvincias(){
    return this.http.get(`${environment.baseurl}/cities/all`);
  }

  getHoteles(city:number){
    return this.http.get(`${environment.baseurl}/hotels/find/${city}`);
  }
}
