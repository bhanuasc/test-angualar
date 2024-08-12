import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  static addNumbers(arg0: number, arg1: number) {
    throw new Error('Method not implemented.');
  }

  addNumbers(a:number,b:number){
    return a+b
  }

  subract(a:number,b:number){
    return a-b
  }
  

}
