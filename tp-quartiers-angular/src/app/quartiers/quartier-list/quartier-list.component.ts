import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Quartier } from '../../models/quartier.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quartier-list',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './quartier-list.component.html',
  styleUrls: ['./quartier-list.component.css']
})
export class QuartierListComponent implements OnInit {
  quartiers: Quartier[] = [];

  constructor(private mockService: MockDataService) {}
  deleteQuartier(id: number): void {
    this.quartiers = this.quartiers.filter(q => q.id !== id);
  }
  

  ngOnInit(): void {
    this.quartiers = this.mockService.getQuartiers();
  }
}
