import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MockDataService } from '../services/mock-data.service';
import { Quartier } from '../models/quartier.model';
import { Maison } from '../models/maison.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  quartiers: Quartier[] = [];
  maisons: Maison[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.quartiers = this.mockService.getQuartiers();
    this.maisons = this.mockService.getMaisons();
  }
}