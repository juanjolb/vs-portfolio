import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../models/nav-item';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  _navBarService: NavbarService = inject(NavbarService);

  navItems: NavItem[] = [
    {
      route: '/sidepanel/skills',
      iconPath: 'assets/icons/extensions.svg',
      active: false,
      altText: 'Home'
    },
    {
      route: '/about',
      iconPath: 'assets/icons/extensions.svg',
      active: false,
      altText: 'About'
    },
    {
      route: '/contact',
      iconPath: 'assets/contact.svg',
      active: false,
      altText: 'Contact'
    }
  ];

  toggleSidePanel(index: number): void {
      this.navItems[index].active = !this.navItems[index].active;
      this._navBarService.toggleSidePanel(this.navItems[index].active);
  }
}
