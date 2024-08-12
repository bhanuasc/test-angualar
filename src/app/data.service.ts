import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myHttpClient : HttpClient) {

   }

   getAllUsers(){
    return this.myHttpClient.get("api/users")
   }

   getData() : Promise<string>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello world...!')
        }, 2000);
        })

   }
}
