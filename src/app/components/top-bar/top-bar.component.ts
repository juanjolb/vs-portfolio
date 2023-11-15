import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="search-item">Juanjo Lozano</div>`,
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
