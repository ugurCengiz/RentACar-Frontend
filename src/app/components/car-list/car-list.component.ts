import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: CarDto[] = [];
  car:CarDto;

  constructor(
    private carService: CarDtoService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  deleteCar(car: CarDto) {
    this.carService.delete(car).subscribe((response)=>{
      this.car =response.data
      this.toastrService.success(response.message);
      this.getCars();
    })
    

  }

  updateCar(car: CarDto) {
    this.carService.update(car).subscribe();
    this.toastrService.success('Araç Başarılı Güncellendi');
  }

}