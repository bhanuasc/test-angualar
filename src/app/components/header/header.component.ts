import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,HighlightDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "bhanu title"

  evenodd(a:number){
    if(a%2==0){
      return "even";
      
    } else{
      return "odd"
    }
  }

  btnText = "Subscribe"
  isSubscribed = false
  subscription(){
    this.btnText="SUBSCRIBED"
    this.isSubscribed=true
  }

  inputNumber : number | undefined
  rese : string=""
  buttonClicked(){
    this.rese = `number entered is ${this.inputNumber}`
  }

}


