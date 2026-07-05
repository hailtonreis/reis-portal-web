import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
 menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update(v => !v);
  }
}
