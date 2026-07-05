import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
