import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class PortfolioComponent {
  constructor(private router: Router) {}
  
  irCasamento() {
    this.router.navigate(['/portfolio/casamento']);
  }

  
  
}
