import { Component } from '@angular/core';
import { NgCrudFormComponent } from 'ng-crud-kit';

@Component({
  selector: 'app-form',
  imports: [NgCrudFormComponent],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  public data = {
      "id": 54,
      "character": "Young Tisbe, Red riding hood",
      "production": "La Cenerentola",
      "director": "Orpha Phelan",
      "company": "Irish National Opera in The Bord gais",
      "year": 2019
    };

  public saved(formRawData: any){
    console.log(formRawData);
  }

  public updateForm(){
    this.data = {
      "id": 54,
      "character": "Arildo",
      "production": "Joseph",
      "director": "Antonio",
      "company": "Fagundes",
      "year": 2019
    }
  }

}
