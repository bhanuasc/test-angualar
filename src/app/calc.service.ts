import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  multiply(a:number,b:number){
    return a*b
  }
  getData(){
    return "some data"
  }
  atmethod(){
    return "some other data"
  }
  
}
