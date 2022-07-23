import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponsoModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl="https://localhost:44396/api/Brands/getall"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
  }

  update(brand:Brand):Observable<ListResponseModel<Brand>>{
    return this.httpClient.post<ListResponseModel<Brand>>(this.apiUrl+"brands/update",brand)
  }

  delete(brand:Brand):Observable<SingleResponseModel<Brand>>{
    return this.httpClient.post<SingleResponseModel<Brand>>(this.apiUrl+"brands/delete",brand)
  }
 
}
