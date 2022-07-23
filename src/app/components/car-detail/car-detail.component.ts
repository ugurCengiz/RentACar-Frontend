import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetail : CarDto
  currentCars: CarDto[] = [];
  brands: Brand[] = [];
  carImages: CarImage[] = [];
  imagePath: string = 'https://localhost:44396/';
  dataLoaded = false;
  filterText=""
  constructor(
    private carImageService: CarImageService,
    private carDetailService: CarDtoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService,
  
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
      }
      this.getImagesByCarId(params['carId']);

    });
  }

  getCarDetail(carId: number) {
    this.carDetailService.getCarDetailByCar(carId).subscribe((response) => {
      this.currentCars = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
     
    });
  }


  addToCart(car:CarDto){  
    this.toastrService.success(
    'Kiralama Sepetinize Eklendi',
    car.brandName+" "+ car.carName );
    this.cartService.addToCart(car);
    
  }
}

