import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Hotel } from '../models/hotel';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization':`Basic ${btoa(`${environment.apiCredentials.username}:${environment.apiCredentials.password}`)}`
    })
  }

  getProvincias() {
    return this.http.get(`${environment.baseurl}/assetcategory/get-vocabulary-categories-display?groupId=20135&name=&vocabularyId=43625&start=-1&end=-1&-obc=`, 
    this.httpOptions).pipe(
      map(e => e['categories'].map(y => new City(y)))
    )
  }

  getHoteles(city: number) {
    return this.http.get(`${environment.baseurlLocal}/hotels/find/${city}`).pipe(
      map((e:any) => e.map(y=> new Hotel(y)))
    );
  }
}
