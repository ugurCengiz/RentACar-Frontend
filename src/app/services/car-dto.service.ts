import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl="https://localhost:44396/api/"
  constructor(private httpClient:HttpClient) { }
  
  getDtoCars():Observable<ListResponseModel<CarDto>>{
    let newPath= this.apiUrl + "cars/getcardetails"
    return  this.httpClient.get<ListResponseModel<CarDto>>(newPath)
   }     
   

   getCarsDtoByBrandId(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath= this.apiUrl + "cars/getcarsdtobybrandid?brandId=" +brandId
    return  this.httpClient.get<ListResponseModel<CarDto>>(newPath)
   }

   getCarsDtoByColorId(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath= this.apiUrl + "cars/getcarsdtobycolorid?colorId=" +colorId
    return  this.httpClient.get<ListResponseModel<CarDto>>(newPath)
   }

   getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getdetailbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarFiltered(colorId:number,brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcoloridandbrandid?colorId="+brandId+"&brandId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }
   
 }
