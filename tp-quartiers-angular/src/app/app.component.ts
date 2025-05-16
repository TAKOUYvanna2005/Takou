import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { LoginComponent } from './auth/login/login.component';
import { QuartierListComponent } from './quartiers/quartier-list/quartier-list.component';
import { QuartierFormComponent } from './quartiers/quartier-form/quartier-form.component';
import { QuartierDetailComponent } from './quartiers/quartier-detail/quartier-detail.component';
import { MaisonListComponent } from './maisons/maison-list/maison-list.component';
import { MaisonFormComponent } from './maisons/maison-form/maison-form.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categories/categorie-form/categorie-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from "./auth/logout/logout.component";
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    NavbarComponent,
    ToastsComponent,
    LoginComponent,
    DashboardComponent, 
    QuartierListComponent,
    QuartierFormComponent,
    QuartierDetailComponent,
    MaisonListComponent,
    MaisonFormComponent,
    CategorieListComponent,
    CategorieFormComponent,
    LogoutComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title(title: any) {
     throw new Error('Method not implemented.');
   }
   constructor(public auth: AuthService) {}
}
