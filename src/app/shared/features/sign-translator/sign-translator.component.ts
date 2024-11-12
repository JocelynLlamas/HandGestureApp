import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';  // Usa WebGL como backend de TensorFlow
import * as tf from '@tensorflow/tfjs';

interface HandPrediction {
  landmarks: [number, number, number][];
}

@Component({
  selector: 'app-sign-translator',
  standalone: true,
  templateUrl: './sign-translator.component.html',
  styleUrls: ['./sign-translator.component.css']
})
export class SignTranslatorComponent implements OnInit {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;
  model: any;
  detectedText: string = '';

  ngOnInit(): void {
    this.startVideo();
    this.loadHandposeModel();
  }

  async loadHandposeModel() {
    this.model = await handpose.load();
    console.log('Modelo Handpose cargado.');
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
    let detectedSign = '';

    // Gestos de ejemplo: A, B y C

    // Detectar "A": todos los dedos cerrados, excepto el pulgar
    const thumbTip = landmarks[4]; // Punta del pulgar
    const indexTip = landmarks[8]; // Punta del índice
    const middleTip = landmarks[12]; // Punta del dedo medio
    const ringTip = landmarks[16]; // Punta del anular
    const pinkyTip = landmarks[20]; // Punta del meñique

    // Comprobar si todos los dedos (excepto el pulgar) están cerca de la palma
    if (
      indexTip[1] > landmarks[0][1] && // El índice está doblado hacia abajo
      middleTip[1] > landmarks[0][1] && // El dedo medio está doblado hacia abajo
      ringTip[1] > landmarks[0][1] && // El anular está doblado hacia abajo
      pinkyTip[1] > landmarks[0][1] && // El meñique está doblado hacia abajo
      thumbTip[0] < indexTip[0] // El pulgar está hacia el lado de la mano
    ) {
      detectedSign = 'A';
    }

    // Detectar "B": todos los dedos extendidos
    else if (
      indexTip[1] < landmarks[0][1] && // El índice está hacia arriba
      middleTip[1] < landmarks[0][1] && // El dedo medio está hacia arriba
      ringTip[1] < landmarks[0][1] && // El anular está hacia arriba
      pinkyTip[1] < landmarks[0][1] && // El meñique está hacia arriba
      thumbTip[1] < landmarks[0][1] // El pulgar está hacia arriba también
    ) {
      detectedSign = 'B';
    }

    // Detectar "C": forma curva de "C"
    else if (
      Math.abs(indexTip[0] - pinkyTip[0]) > 20 && // Distancia entre el índice y el meñique en el eje x
      Math.abs(indexTip[1] - pinkyTip[1]) < 50 && // No demasiada distancia vertical
      Math.abs(thumbTip[0] - indexTip[0]) < 50 // Pulgar cerca del índice
    ) {
      detectedSign = 'C';
    }

    // Actualizar el texto detectado
    this.updateDetectedText(detectedSign);
  }


  updateDetectedText(sign: string) {
    this.detectedText = sign;
  }
}
