import { Component } from '@angular/core';
import { SidebarComponent } from '../../src/sidebar/sidebar.component';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'data-visualizer';
}
