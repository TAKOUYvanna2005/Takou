import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maison-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maison-detail.component.html',
  styleUrls: ['./maison-detail.component.css']
})
export class MaisonDetailComponent implements OnInit {
  maison: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.maison = { id, nom: 'Maison Exemple', superficie: 120, quartier: 'Quartier A' };
  }
}