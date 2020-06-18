import { Component, OnInit } from '@angular/core';
import { Covid19ApiService } from '../covid19-api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-spain-stats',
  templateUrl: './spain-stats-component.html',
  styleUrls: ['./spain-stats-component.css']
})
export class SpainStatsComponent implements OnInit {
  spain;
  breakpoint;
  constructor(
    private covid19ApiService: Covid19ApiService) {}

  ngOnInit(): void {
    this.covid19ApiService.getSpain().subscribe((data)=>{
      this.spain = data[data.length-1];
      console.log(this.spain)
      });
    interval(5000).subscribe(x => {
      this.covid19ApiService.getSpain().subscribe((data)=>{
        this.spain = data[data.length-1];
        console.log(this.spain)
        });
      });
    }
    onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 1650) ? 1 : 2;
    }
    onLoadBody(event){
      this.breakpoint = (event.target.innerWidth <= 1650) ? 1 : 2;
    }
  }
