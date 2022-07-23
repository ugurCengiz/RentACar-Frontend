import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { CarDto } from '../models/carDto';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponsoModel';

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
  getCarDetailsById(carId: number): Observable<SingleResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailcarid?id='+carId;
    return this.httpClient.get<SingleResponseModel<CarDto>>(newPath);
  }

  add(car:CarDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  update(car:CarDto):Observable<ListResponseModel<CarDto>>{
    return this.httpClient.post<ListResponseModel<CarDto>>(this.apiUrl+"cars/update",car)
  }

  delete(car:CarDto):Observable<SingleResponseModel<CarDto>>{
    return this.httpClient.post<SingleResponseModel<CarDto>>(this.apiUrl+"cars/delete",car)
  }
   
 }
