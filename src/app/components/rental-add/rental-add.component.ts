import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {  
  rentalAddForm: FormGroup;

  
  car: CarDto;
  user:User;
  customer : Customer;
  customers : Customer[]=[];
  carId: number;
  
 
  constructor( private toastrService: ToastrService,
    private carService: CarDtoService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private localStorageService:LocalStorageService,
    private customerService:CustomerService,) {  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
        let currentUserId = parseInt(this.localStorageService.getCurrentUserId(),10);
        this.getCustomerByUserId(currentUserId);
        console.log("dda", this.getCustomerByUserId(currentUserId))
        this.createRentalAddForm();
      }
    });
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      rentDate : ["",Validators.required],
      returnDate : ["",Validators.required],
    })
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      console.log("car",response)
      this.car = response.data;
     
    });
  }

  getCustomerByUserId(id:number) {
    this.customerService.getCustomerByUserId(id).subscribe((response) => {
      console.log("response",response)
        this.customer = response.data;
       
      });
  }
  paramsCarId:number;

  addRental(){
    if(this.rentalAddForm.valid){
      this.activatedRoute.params.subscribe((params) => {
        this.paramsCarId=params['carId']
      });
      console.log("this.paramsCarId",this.paramsCarId)
      let rentalModel = Object.assign({carId:this.paramsCarId, customerId:this.customer.customerId},this.rentalAddForm.value)      
      console.log("rentalModel",rentalModel)
      this.localStorageService.addRental(rentalModel)
      this.router.navigate(['/payment/car/'+this.paramsCarId]);
      this.toastrService.success("Ödeme Sayfasına Yönlendiriliyorsunuz");
    } else {
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }    
  }

  
}
