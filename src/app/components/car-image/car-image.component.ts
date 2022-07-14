import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  gunFarki:number=0;
  car!:CarDto;
  dateTimeNow:Date=new Date();
  rentDate:Date=this.dateTimeNow;
  rentEndDate:Date=this.dateTimeNow;
  cars:CarDto[]=[];
  images:CarImage[]=[];
  imagePaths:string[]=[];
  imageUrl="https://localhost:44357/";
  currentCar?:CarDto;

  constructor(private carService:CarDtoService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private rentalService:RentalService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsById(params['carId']);
        this.getImagesById(params['carId']);
      }
    });
  }

  setCurrentCar(car: CarDto) {
    this.currentCar = car;
  }

  getCarsById(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getImagesById(Id: number) {
    this.carImageService.GetCarImagesByCarId(Id).subscribe((response) => {
      this.images = response.data;
    });
  }

}
