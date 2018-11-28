import { environment } from "src/environments/environment";

export interface hotelResponse {
  caracteristica0: string;
  caracteristica1: string;
  caracteristica2: string;
  categoria0: string;
  categoria1: string;
  categoria2: string;
  categoria3: string;
  description: string;
  hotelId: string;
  oferta: string;
  precio: string;
  title: string;
  urlImage: string;
  uuid: string;
}

export class Hotel {
  img: string;
  name: string;
  features: String[];
  description: string;
  prize: string;
  offer: string;

  constructor(data:hotelResponse){
    this.img = environment.domain+data.urlImage;
    this.name = data.title;
    this.features = [data.caracteristica0, data.caracteristica1, data.caracteristica2];
    this.description = data.description;
    this.prize = data.precio;
    this.offer = data.oferta;
  }

}
