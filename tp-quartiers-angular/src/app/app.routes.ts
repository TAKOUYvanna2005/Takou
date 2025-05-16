import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuartierListComponent } from './quartiers/quartier-list/quartier-list.component';
import { QuartierDetailComponent } from './quartiers/quartier-detail/quartier-detail.component';
import { QuartierFormComponent } from './quartiers/quartier-form/quartier-form.component';
import { MaisonListComponent } from './maisons/maison-list/maison-list.component';
import { MaisonFormComponent } from './maisons/maison-form/maison-form.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categories/categorie-form/categorie-form.component';
import { MaisonDetailComponent } from './maisons/maison-detail/maison-detail.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quartiers', component: QuartierListComponent },
  { path: 'quartiers/new', component: QuartierFormComponent },
  { path: 'quartiers/:id', component: QuartierDetailComponent },
  { path: 'quartiers/:id/edit', component: QuartierFormComponent },
  { path: 'maisons', component: MaisonListComponent },
  { path: 'maisons/new', component: MaisonFormComponent },
  { path: 'maisons/:id', component: MaisonDetailComponent },
  { path: 'maisons/:id/edit', component: MaisonFormComponent },
  { path: 'categories', component: CategorieListComponent },
  { path: 'categories/new', component: CategorieFormComponent },
  { path: 'categories/:id/edit', component: CategorieFormComponent }
];