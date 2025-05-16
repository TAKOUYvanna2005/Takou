import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-categorie-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {
  categorieForm: FormGroup;
categorie: any;

  constructor(private fb: FormBuilder, private mockService: MockDataService) {
    this.categorieForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  submit() {
    if (this.categorieForm.valid) {
      this.mockService.addCategorie(this.categorieForm.value);
      this.categorieForm.reset();
      alert('Catégorie ajoutée !');
    }
  }
}