import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
//import { CarDetailsComponent } from './components/car/car-details/car-details/car-details.component';


const routes: Routes = [
   {path:"cars", component:CarDetailComponent},
  {path:"", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent},
  {path:"cars/:carId",component:AComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
