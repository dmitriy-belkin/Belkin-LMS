import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home/home.component.html',
  styleUrl: './home/home.component.scss'
})
export class AppComponent {
  title = 'Belkin LMS';
}
