import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';




const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDtoComponent},
  {path:"cars",component:CarDtoComponent},
  {path:"colors",component:CarDtoComponent},
  {path:"cars/brand/:brandId",component:CarDtoComponent},  
  {path:"cars/color/:colorId",component:CarDtoComponent},  
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarDtoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
