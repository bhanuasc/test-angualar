import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'testangular';

  constructor(){
    console.log("constructor is called")
  }

  ngOnInit(){

    console.log("ngOnInit is called")
  }
  playing(){
    debugger
    var myname = "bhanu"
    console.log(myname+ "is playing")
    console.log("playing is clicked")
  }
}
