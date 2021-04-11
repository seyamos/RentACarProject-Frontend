import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetails[] = [];
  carImages:CarImage[]=[];
  // carImagePath = "https://localhost:44346";
  dataLoaded = false;

  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrandId(params["brandId"])
      }else if (params["colorId"])
      {      
        this.getCarDetailsByColorId(params["colorId"])
      }
      else{
        this.getCarsDetails()
      }
            
    })
  }

  
  
  getCarsDetails() {
    this.carService.getCarsDetails().subscribe(response=>{
      this.carDetails = response.data  
      //console.log(this.carDetails)  
      this.dataLoaded = true;  
    })
   
}
  

  getCarDetailsByBrandId(brandId:number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  
  }

  getCarDetailsByColorId(colorId:number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })  
  }

}
