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
  carsDto:CarDto[]=[]   
  dataLoaded=false;
  constructor(
    private carDtoService:CarDtoService,
    private activatedRoute:ActivatedRoute,    
   
    ) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsDtoByBrandId(params["brandId"])
      }else if (params["colorId"]) {        
        this.getCarsDtoByColorId(params["colorId"])
      }
      else{
        this.getDtoCars()
      }
    })
    
    
  }
  getDtoCars(){
    this.carDtoService.getDtoCars().subscribe(response=>{
     this.carsDto=response.data     
     this.dataLoaded=true;
    })
  }  

  getCarsDtoByBrandId(brandId:number){
    this.carDtoService.getCarsDtoByBrandId(brandId).subscribe(response=>{     
     this.carsDto=response.data     
     this.dataLoaded=true;
    })
  }

  getCarsDtoByColorId(colorId:number){
    this.carDtoService.getCarsDtoByColorId(colorId).subscribe(response=>{     
     this.carsDto=response.data     
     this.dataLoaded=true;
    })
  }
 
  }

  

