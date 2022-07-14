import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CarImageComponent } from './components/car-image/car-image.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDtoComponent},
  {path:"cars",component:CarDtoComponent},
  {path:"colors",component:CarDtoComponent},
  {path:"cars/brand/:brandId",component:CarDtoComponent},  
  {path:"cars/color/:colorId",component:CarDtoComponent},
  {path:"cars/cardetails", component:CarDetailComponent},
  {path:"cars/cardetails2", component:CarImageComponent},
  {path:"cars/cardetails2", component:CarImageComponent},
  {path:"cars/cardetails2/:carId", component:CarImageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
