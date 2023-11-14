import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  navItems: NavItem[] = [
    {
      route: '/home',
      iconPath: './assets/home.svg',
      active: true,
      altText: 'Home'
    },
    {
      route: '/about',
      iconPath: './assets/about.svg',
      active: false,
      altText: 'About'
    },
    {
      route: '/contact',
      iconPath: './assets/contact.svg',
      active: false,
      altText: 'Contact'
    }
  ];
}
