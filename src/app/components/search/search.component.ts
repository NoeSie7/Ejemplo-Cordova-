import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelComponent } from '../hotel/hotel.component';
import { ApiService } from 'src/app/services/api.service';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public cities;
  selectedSimpleItem: number;
  hotels: any;

  @ViewChild(HotelComponent) hotel: HotelComponent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProvincias().toPromise().then((res: City[]) => {
      this.cities = res
    }).catch(err => {
      console.error(err);

    });
  }

  findHotels() {
    this.apiService.getHoteles(this.selectedSimpleItem).toPromise().then((res: Hotel[]) => {
      this.hotels = res;
    }).catch(err => {
      console.log(err);
    });
  }

}
