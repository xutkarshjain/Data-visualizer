import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  topNavItemsList: string[] = [
    'home',
    'analytics',
    'stacks',
    'library_add_check',
    'pie_chart',
    'group',
  ];
  bottomNavItemsList: string[] = ['support', 'settings'];
}
