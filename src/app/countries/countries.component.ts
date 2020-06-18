import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
tableColumns  :  string[] = ['Nombre', 'Infectados', 'Muertes', 'Curados'];
  constructor() { }

  ngOnInit(): void {
  }

}
