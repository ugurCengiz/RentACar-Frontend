import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponsoModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44396/api/"
  constructor(private httpClient:HttpClient) { }

  getCustomerDetails() : Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getcustomerdetails"
   return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerByUserId(id:number) : Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getbyuserid?id="+id
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
   }



   getById(id:number): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/getbyid?id='+id;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
