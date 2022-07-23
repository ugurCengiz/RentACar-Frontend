import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
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
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDtoComponent},

  {path:"cars",component:CarDtoComponent},
  {path:"colors",component:CarDtoComponent,canActivate:[LoginGuard]},
  {path:"cars/brand/:brandId",component:CarDtoComponent}, 
  {path:"cars/color/:colorId",component:CarDtoComponent},  
  {path:"cars/cardetail/:carId",component:CarDetailComponent,canActivate:[LoginGuard]},
  {path:"cars/filter/:brandId/:colorId",component:CarDtoComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/update/:carId",component:CarUpdateComponent,canActivate:[LoginGuard]},

  {path:"carlist",component:CarListComponent,canActivate:[LoginGuard]},
  {path:"carlist/car/:carId",component:CarUpdateComponent,canActivate:[LoginGuard]},

  {path:"brands",component:BrandListComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"brands/update/:brandId",component:CarUpdateComponent,canActivate:[LoginGuard]},


  {path:"colors",component:ColorListComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"colors/update/:colorId",component:ColorUpdateComponent,canActivate:[LoginGuard]},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  
  {path:"rentals",component:RentalDtoComponent,canActivate:[LoginGuard]},
  {path:"rentals/car/:carId",component:RentalAddComponent,canActivate:[LoginGuard]},
  {path:"rentals/add",component:RentalAddComponent,canActivate:[LoginGuard]},

  {path:"payment",component:PaymentComponent,canActivate:[LoginGuard]},
  {path:"payment/car/:carId",component:PaymentComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
