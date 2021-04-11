import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  carDetails: CarDetails[] = [];
  carImages:CarImage[]=[];
  carImagePath = "https://localhost:44346";

  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"])
        this.getImagesByCarId(params["carId"])      
      }      
    })
  }  

  getCarDetailsByCarId(carId:number) {
  this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
    this.carDetails = response.data
    
  })
}

  getImagesByCarId(carId:number) {
  this.carImageService.getImagesByCarId(carId).subscribe(response=>{
    this.carImages = response.data
    
  })  
}

}


