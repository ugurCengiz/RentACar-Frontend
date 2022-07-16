import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {
  
  cars: CarDto[] = [];
  imagePath: string = 'https://localhost:44396/';
  dataLoaded = false;
  currentCar: CarDto | undefined;
  filterText="";

  

  constructor(
    private carService: CarDtoService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailByCar(params['carId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else this.getCars();
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailByCar(carId: number) {
    this.carService.getCarDetailByCar(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: CarDto) {
    this.currentCar = car;
  }
  getCurrentCarClass(car: CarDto) {
    if (car == this.currentCar) return 'table-active';
    else return '';
  }
  getAllCarClass() {
    if (!this.currentCar) return 'table-active';
    else return '';
  }
  setCurrentCarEmpty() {
    this.currentCar = undefined;
  }

  }

  

