import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand :Brand; 
  dataLoaded=false;
  filterText="";
  brandForm:FormGroup;
  isAllCarsClicked:boolean = true;
  brand:Brand
  
  constructor(
    private formBuilder:FormBuilder,
    private brandService : BrandService) { }

  ngOnInit(): void {
    this.brandForm=this.formBuilder.group({brand:[null]})
    this.getBrand()
  }

  getBrand(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands =response.data
      this.dataLoaded=true;
    })
  }

  setCurrentBrand(brand:Brand){
  this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand && !this.isAllCarsClicked){
      return "list-group-item active";
    } else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  makeAllCarsActive(){
    this.isAllCarsClicked = true;
    console.log("all cars clicked.");
    
  }

  submit(){
    console.log("Form Submitted")
    console.log(this.brandForm.value)
  }

}
