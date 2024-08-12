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
}
