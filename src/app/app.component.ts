import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HandDetectionComponent } from './hand-detection/hand-detection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HandDetectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hand-gesture-app';
}
