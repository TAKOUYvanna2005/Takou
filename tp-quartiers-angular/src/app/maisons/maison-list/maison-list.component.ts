import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Maison } from '../../models/maison.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maison-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './maison-list.component.html',
  styleUrl: './maison-list.component.css'
})
export class MaisonListComponent implements OnInit {
confirmDelete() {
throw new Error('Method not implemented.');
}
  maisons: Maison[] = [];

  constructor(private mockService: MockDataService) {}

  deleteMaison(id: number): void {
    this.maisons = this.maisons.filter(m => m.id !== id);
  }
   
  ngOnInit(): void {
    this.maisons = this.mockService.getMaisons();
  }
}
