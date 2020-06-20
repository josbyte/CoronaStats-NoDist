import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19ApiService } from '../covid19-api.service';
import { interval } from 'rxjs';
import {MatSort} from '@angular/material/sort';
import { cpuUsage } from 'process';
import {MatTableDataSource} from '@angular/material/table';
import { MAR } from '@angular/material/core';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
tableArray=[];
tableColumns  :  string[] = ['Pais', 'Infectados', 'Muertes', 'Curados'];

  constructor(private covid19ApiService: Covid19ApiService) { }
  ngOnInit(): void {
    this.covid19ApiService.getGlobal().subscribe((data)=>{
      console.log(data)

      for (var i=0; i < Object.entries(data["Countries"]).length; i++){
        console.log("a")
        this.tableArray.push({"Pais": data["Countries"][i]["Country"], "Infectados": data["Countries"][i]["TotalConfirmed"], "Muertes": data["Countries"][i]["TotalDeaths"], "Curados": data["Countries"][i]["TotalRecovered"]})
      } 
      console.log(this.tableArray[0])
      });
    interval(5000).subscribe(x => {
      this.covid19ApiService.getGlobal().subscribe((data)=>{
        console.log(data["Countries"])
        this.tableArray = []
        for (var i=0; i < Object.entries(data["Countries"]).length; i++){
          console.log("a")
          this.tableArray.push({"Pais": data["Countries"][i]["Country"], "Infectados": data["Countries"][i]["TotalConfirmed"], "Muertes": data["Countries"][i]["TotalDeaths"], "Curados": data["Countries"][i]["TotalRecovered"]})
        }
        });
      });
    }
    
    public sortTable(tableName: String){
      if (tableName=='Pais'){
        this.tableArray= this.tableArray.sort(function(a,b) {return (a.Country < b.Country) ? 1 : ((b.Country < a.Country) ? -1 : 0);} );
        console.log(this.tableArray)
      }
      if (tableName=='Infectados'){
        this.tableArray= this.tableArray.sort(function(a,b) {return (a.TotalConfirmed < b.TotalConfirmed ) ? 1 : ((b.TotalConfirmed < a.TotalConfirmed ) ? -1 : 0);} );
        console.log(this.tableArray)
      }
    }
  
  }

