export interface hotelResponse{
  title: string;
  imgUrl0: string;
  imgUrl1: string;
  caracteristica0: string;
  caracteristica1: string;
  caracteristica2: string;
  precio: number;
  oferta: number;
  endField: boolean;
}
export class Hotel{
  name: string;
  address: string;

  constructor(data:hotelResponse){
    this.name = data.title;
    this.address = data.caracteristica0;
  }


}
