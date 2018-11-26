import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelComponent} from '../hotel/hotel.component';
import { ApiService } from 'src/app/services/api.service';


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
    // this.cities = [true, 'Two', 3];
    this.apiService.getProvincias().toPromise().then((res: any[]) => {
      console.log(res);
      this.cities = res;
    });
  }


  findHotels() {
    this.apiService.getHoteles(this.selectedSimpleItem).toPromise().then( res => {
      console.log('hotels', res);
      this.hotels = res;
    }).catch(err => console.log(err));
  }

}
