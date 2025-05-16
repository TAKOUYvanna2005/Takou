import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.css'
})
export class ToastsComponent {
  showToast = false;
  message = '';

  displayMessage(message: string) {
    this.message = message;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}