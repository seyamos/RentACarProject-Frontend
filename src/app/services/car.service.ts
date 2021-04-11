import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = "https://localhost:44346/api/";

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

    getCarsDetails():Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);

  }

    getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);

  }

   getCarDetailsByBrandId(brandId:number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByColorId(colorId:number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

}
