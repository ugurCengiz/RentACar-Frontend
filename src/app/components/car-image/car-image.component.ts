import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if (params["carId"]) {
        this.getCarImageByCarId(params["carId"]);        
      }

    })
  }

  getCarImageByCarId(id:number){
    this.carImageService.GetCarImagesByCarId(id).subscribe(response=>{
      console.log(response.data)
      this.carImages=response.data;
    })
  }

  getImageSource(carImage:CarImage):string{
    let url:string = "http://localhost:44396/"+carImage.imagePath;
    return url
  }
}
