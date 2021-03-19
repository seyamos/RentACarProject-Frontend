import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  //apiUrl = "https://localhost:44346/api/cars/getcardetails";

  apiUrl = "https://localhost:44346/api/";

  constructor(private httpClient:HttpClient) { }

  //getCars():Observable<CarResponseModel> {
    //return this.httpClient.get<CarResponseModel>(this.apiUrl);
  //}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


    getCarsDetails():Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);

  }

}
