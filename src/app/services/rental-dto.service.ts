import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';


@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {
  apiUrl="https://localhost:44396/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }

  getRentalsDto():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl)
  }
}
