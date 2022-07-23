import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDtoComponent},

  {path:"cars",component:CarDtoComponent},
  {path:"colors",component:CarDtoComponent},
  {path:"cars/brand/:brandId",component:CarDtoComponent}, 
  {path:"cars/color/:colorId",component:CarDtoComponent},  
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarDtoComponent},

  {path:"carlist",component:CarListComponent},
  {path:"carlist/car/:carId",component:CarUpdateComponent},

  {path:"brands",component:BrandListComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"brands/update/:brandId",component:CarUpdateComponent},

  {path:"rentals",component:RentalDtoComponent},
  {path:"rentals/car/:carId",component:RentalAddComponent},
  {path:"rentals/add",component:RentalAddComponent},

  {path:"colors",component:ColorListComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  
  {path:"rentals",component:RentalDtoComponent},
  {path:"rentals/car/:carId",component:RentalAddComponent},
  {path:"rentals/add",component:RentalAddComponent},

  {path:"payment",component:PaymentComponent},
  {path:"payment/car/:carId",component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
