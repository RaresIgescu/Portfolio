import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { importProvidersFrom, NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'home', component: HomeComponent}
];

export const appConfigProviders = [
  importProvidersFrom(RouterModule.forRoot(routes))
];