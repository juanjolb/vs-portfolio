import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, NavBarComponent, SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular17_playground';
  showSidePanel: Boolean = false;
  _navBarService: NavbarService = inject(NavbarService);

  ngOnInit(): void {
    this._navBarService.sidePanelOpen.subscribe((value) =>  this.showSidePanel = value);
  }

}
