import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-quartier-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './quartier-form.component.html',
  styleUrl: './quartier-form.component.css'
})
export class QuartierFormComponent {
  quartierForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quartierForm = this.fb.group({
      nom: ['', Validators.required],
      superficie: ['', [Validators.required, Validators.min(1)]]
    });
  }

  submit() {
    if (this.quartierForm.valid) {
      console.log(this.quartierForm.value);
      alert('Quartier ajouté ou modifié !');
    }
  }
}
