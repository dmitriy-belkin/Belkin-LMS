import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent,
    FiltersComponent],
  templateUrl: 'home/home.component.html',
  styleUrls: ['home/home.component.scss']
})
export class AppComponent {
  title = 'Belkin LMS';
}
