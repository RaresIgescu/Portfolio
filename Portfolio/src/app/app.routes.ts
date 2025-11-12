import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { STSComponent } from './home/sts/sts.component';
import { LenovoComponent } from './home/lenovo/lenovo.component';
import { OrangeComponent } from './home/orange/orange.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home/sts', component: STSComponent},
    { path: 'home/lenovo', component: LenovoComponent},
    { path: 'home/orange', component: OrangeComponent},
    { path: 'resume', component: ResumeComponent}
];

export const appConfigProviders = [
  importProvidersFrom(RouterModule.forRoot(routes))
];