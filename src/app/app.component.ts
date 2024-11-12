import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HandDetectionComponent } from './shared/features/hand-detection/hand-detection.component';
import { HomeComponent } from './shared/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HandDetectionComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hand-gesture-app';
}
