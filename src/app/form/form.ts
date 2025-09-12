import { Component } from '@angular/core';
import { NgCrudFormComponent } from 'ng-crud-kit';
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-form',
  imports: [NgCrudFormComponent, MatTabsModule, MatButtonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  public data = {"id": 54,
      "name": "Gaming Computer",
      "description": "A gaming computer for fun",
      "price": 2500,
    };

  public saved(formRawData: any){
    alert('Item being saved!');
  }

  public updateForm(){
    this.data = {"id": 87,
      "name": "Family Car",
      "description": "A car for family trips",
      "price": 76890,
    };
  }

}
