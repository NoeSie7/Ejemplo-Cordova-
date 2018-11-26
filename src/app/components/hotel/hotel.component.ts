import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel: any;

  constructor() { }

  ngOnInit() {
  }

  toArray(n: number) {
    const aux: number[] = [];
    for (let i = 0; i < n; i++) {
      aux.push(i);
    }
    return aux;
  }
}
