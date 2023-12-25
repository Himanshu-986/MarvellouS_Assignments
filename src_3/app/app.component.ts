import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './inline.component.html',
  styleUrl: './inline.component.css'
})
export class AppComponent {
  title = 'marvellous Infosystems';
}
