import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';

interface HandPrediction {
  landmarks: [number, number, number][];
}

@Component({
  selector: 'app-hand-detection',
  standalone: true,
  templateUrl: './hand-detection.component.html',
  styleUrls: ['./hand-detection.component.css']
})
export class HandDetectionComponent implements OnInit {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;
  model: any;

  ngOnInit(): void {
    this.startVideo();
    this.loadHandposeModel();
  }

  async loadHandposeModel() {
    this.model = await handpose.load();
    console.log('Handpose Model loaded.');
    this.checkVideoAndStartDetection();
  }

  startVideo() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('La API getUserMedia no es compatible con este navegador.');
      alert('Tu navegador no soporta la API getUserMedia necesaria para acceder a la cámara.');
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const video = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          this.checkVideoAndStartDetection();
        };
      })
      .catch(error => {
        console.error('Error al acceder a la cámara', error);
        if (error.name === 'NotAllowedError') {
          alert('Se requiere permiso para acceder a la cámara. Por favor, permite el acceso en la configuración del navegador.');
        }
      });
  }

  checkVideoAndStartDetection() {
    if (this.model && this.videoElement.nativeElement.readyState >= 3) {
      this.detectHands();
    } else {
      console.log("Waiting model and video...");
      setTimeout(() => this.checkVideoAndStartDetection(), 500);
    }
  }

  async detectHands() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    while (true) {
      const predictions = await this.model.estimateHands(video) as HandPrediction[];

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (predictions.length > 0) {
        predictions.forEach((prediction) => {
          const landmarks = prediction.landmarks;
          this.drawHand(context, landmarks);
          this.detectGesture(landmarks);
        });
      }

      await tf.nextFrame();
    }
  }

  drawHand(context: CanvasRenderingContext2D, landmarks: [number, number, number][]) {
    context.fillStyle = 'red';
    landmarks.forEach(([x, y]) => {
      context.beginPath();
      context.arc(x, y, 5, 0, 2 * Math.PI);
      context.fill();
    });
  }

  detectGesture(landmarks: [number, number, number][]) {
    const thumbTip = landmarks[4];
    const indexFingerTip = landmarks[8];

    if (thumbTip[1] < indexFingerTip[1]) {
      console.log('👍 Finger tip detected');
    }
  }
}
