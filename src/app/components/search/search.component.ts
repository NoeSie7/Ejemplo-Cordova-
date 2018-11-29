import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelComponent } from '../hotel/hotel.component';
import { ApiService } from 'src/app/services/api.service';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public cities;
  selectedSimpleItem: number = null;
  hotels: any;
  @ViewChild(HotelComponent) hotel: HotelComponent;

  constructor(
    private apiService: ApiService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.apiService.getProvincias().subscribe(
      (res: City[]) =>{
       this.cities = res;
      },
      err => {
        console.error(err);
      }
    );
    this.translate.onLangChange.subscribe(() =>{
      if(this.selectedSimpleItem){
        this.findHotels();
      }
    })
  }

  findHotels() {
    this.apiService.getHoteles(this.selectedSimpleItem).subscribe(
      (res: Hotel[]) => this.hotels = res,
      err => console.error(err)
    );
  }

}
