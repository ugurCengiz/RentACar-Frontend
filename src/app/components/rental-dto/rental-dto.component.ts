import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalDtoService } from 'src/app/services/rental-dto.service';

@Component({
  selector: 'app-rental-dto',
  templateUrl: './rental-dto.component.html',
  styleUrls: ['./rental-dto.component.css']
})
export class RentalDtoComponent implements OnInit {
  rentalsDto:RentalDto[]=[]
  dataLoaded=false
  constructor(private rentalDtoService:RentalDtoService) { }

  ngOnInit(): void {
    this.getRentalDto()
  }

  getRentalDto(){
    this.rentalDtoService.getRentalsDto().subscribe(response=>{      
      this.rentalsDto=response.data;
      this.dataLoaded=true;
    })
  }
}
