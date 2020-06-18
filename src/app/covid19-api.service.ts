import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Covid19ApiService {

  constructor( 
    private httpClient: HttpClient) {}
  public getGlobal(){
    var url = 'https://api.covid19api.com/summary'
    return this
      .httpClient
      .get(`${url}`);
  }
  public getSpain(){
    var url = 'https://api.covid19api.com/live/country/spain'
    return this
      .httpClient
      .get(`${url}`);
  }
}
