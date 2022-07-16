import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:Color;
  dataLoaded=false;
  filterText="";
  colorForm:FormGroup;
 
  constructor(private formBuilder:FormBuilder,private colorService:ColorService) { }

  ngOnInit(): void {
    this.colorForm  = this.formBuilder.group({
      color:[null]
    });
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors =response.data
      this.dataLoaded=true;
    })
  }
  setCurrentColor(color:Color){
    this.currentColor =color;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"

    }
  }


}

