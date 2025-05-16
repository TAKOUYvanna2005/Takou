import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { Categorie } from '../../models/categorie.model'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-categorie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.categories = this.mockService.getCategories();
  }
}
