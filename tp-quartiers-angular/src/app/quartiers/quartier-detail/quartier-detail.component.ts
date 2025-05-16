import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quartier-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './quartier-detail.component.html',
  styleUrls: ['./quartier-detail.component.css']
})
export class QuartierDetailComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  quartier: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.quartier = { id, nom: 'Quartier A', superficie: 500, maisons: 10 };
  }
}


