import { Injectable } from '@angular/core';
import { Quartier } from '../models/quartier.model';
import { Maison } from '../models/maison.model';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  getMaisonById(id: number): Maison | undefined {
    return this.getMaisons().find(m => m.id === id);
  }
  getQuartiers(): Quartier[] {
    return [
      { id: 1, nom: 'Quartier A', superficie: 500, maisons: 10 },
      { id: 2, nom: 'Quartier B', superficie: 800, maisons: 15 },
      { id: 3, nom: 'Quartier C', superficie: 600, maisons: 8 },
      { id: 4, nom: 'Quartier D', superficie: 750, maisons: 12 },
      { id: 5, nom: 'Quartier E', superficie: 900, maisons: 20 }
    ];
  }

  getMaisons(): Maison[] {
    return [
      {
        id: 1,
        nom: 'Villa Alpha',
        adresse: '12 rue des Lilas',
        superficie: 150,
        categorie: 'Villa',
        quartier: { id: 1, nom: 'Quartier A' }
      },
      {
        id: 2,
        nom: 'Appartement Beta',
        adresse: '8 avenue des Roses',
        superficie: 120,
        categorie: 'Appartement',
        quartier: { id: 2, nom: 'Quartier B' }
      },
      {
        id: 3,
        nom: 'Villa Gamma',
        adresse: '5 rue du Soleil',
        superficie: 180,
        categorie: 'Villa',
        quartier: { id: 3, nom: 'Quartier C' }
      },
      {
        id: 4,
        nom: 'Studio Delta',
        adresse: '2 allée des Tilleuls',
        superficie: 90,
        categorie: 'Appartement',
        quartier: { id: 4, nom: 'Quartier D' }
      },
      {
        id: 5,
        nom: 'Appartement Epsilon',
        adresse: '25 boulevard Nord',
        superficie: 110,
        categorie: 'Studio',
        quartier: { id: 5, nom: 'Quartier E' }
      }
    ];
  }
  

  getQuartierById(id: number) {
    const quartiers = [
      { id: 1, nom: 'Quartier A', superficie: 500, maisons: 10 },
      { id: 2, nom: 'Quartier B', superficie: 800, maisons: 15 },
      { id: 3, nom: 'Quartier C', superficie: 600, maisons: 8 },
      { id: 4, nom: 'Quartier D', superficie: 750, maisons: 12 },
      { id: 5, nom: 'Quartier E', superficie: 900, maisons: 20 }
    ];
    return quartiers.find(q => q.id === id);
  }

  private categories: Categorie[] = [
    {
      id: 1, nom: 'villa',
      libelle: '',
      name: undefined
    },
    {
      id: 2, nom: 'Appartement',
      libelle: '',
      name: undefined
    },
    {
      id: 3, nom: 'Villa',
      libelle: '',
      name: undefined
    },
    {
      id: 4, nom: 'studio',
      libelle: '',
      name: undefined
    },
    {
      id: 5, nom: 'appartement',
      libelle: '',
      name: undefined
    }
  ];

  getCategories(): Categorie[] {
    return this.categories;
  }

  addCategorie(categorie: Categorie) {
  categorie.id = this.categories.length > 0 ? Math.max(...this.categories.map(c => c.id)) + 1 : 1;
  this.categories.push(categorie);
}
}
