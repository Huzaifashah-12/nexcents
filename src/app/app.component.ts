import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexcent';
}
