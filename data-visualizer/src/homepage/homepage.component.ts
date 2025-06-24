import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BarChartCardComponent } from '../homepage/charts/bar-chart-card/bar-chart-card.component';
import { GuageChartCardComponent } from '../homepage/charts/guage-chart-card/guage-chart-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, BarChartCardComponent, GuageChartCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
