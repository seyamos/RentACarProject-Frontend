import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars: CarDetails[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsDetails();
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })       

  }

}
