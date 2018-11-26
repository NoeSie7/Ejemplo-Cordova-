import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelComponent} from '../hotel/hotel.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public items;

  @ViewChild(HotelComponent) hotel: HotelComponent;

  constructor() { }

  ngOnInit() {
    this.items = [true, 'Two', 3];
  }

}
