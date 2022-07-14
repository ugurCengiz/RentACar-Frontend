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
  apiUrl = 'https://localhost:44396/api/';
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarByBrand(id:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcarsdtobybrandid?brandId="+id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarByColor(id:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcarsdtobycolorid?colorId="+id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailByCar(id:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcardetailcarid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
   
 }
