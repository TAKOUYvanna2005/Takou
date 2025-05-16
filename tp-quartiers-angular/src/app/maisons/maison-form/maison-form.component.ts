import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockDataService } from '../../services/mock-data.service';
import { CommonModule } from '@angular/common';

interface Quartier {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-maison-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './maison-form.component.html',
  styleUrls: ['./maison-form.component.css']
})
export class MaisonFormComponent implements OnInit {
  maisonForm!: FormGroup; 
  quartiers: Quartier[] = []; 

  constructor(private fb: FormBuilder, private mockService: MockDataService) {}

  ngOnInit(): void {
   
    this.maisonForm = this.fb.group({
      nom: ['', Validators.required],
      superficie: ['', [Validators.required, Validators.min(1)]],
      quartierId: ['', Validators.required]
    });

    
    this.quartiers = this.mockService.getQuartiers();
  }

  submit(): void {
    if (this.maisonForm.valid) {
      console.log(this.maisonForm.value);
      alert('Maison ajoutée ou modifiée avec succès !');
    }
  }
}