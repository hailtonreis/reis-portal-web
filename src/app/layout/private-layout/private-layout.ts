import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-private-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.scss'
})
export class PrivateLayout {

}