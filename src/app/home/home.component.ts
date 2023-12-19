import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
