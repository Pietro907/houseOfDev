import { Routes } from '@angular/router';

/* import Component */
import { AppComponent } from './app.component';
import { TableProjectsComponent } from '../component/table-projects/table-projects.component';
import { CardProjectsComponent } from '../component/card-projects/card-projects.component';
import { HomeComponent } from '../component/home/home.component';
import { PageShowComponent } from '../component/page-show/page-show.component';
import { BiographyComponent } from '../component/biography/biography.component';
import { DrawCodeComponent } from '../component/draw-code/draw-code.component';



export const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent, children: []},
   {path: 'table-projects', component: TableProjectsComponent},
   {path: 'card-projects', component: CardProjectsComponent},
   {path: 'card-projects/show/:repoName', component: PageShowComponent},
   {path: 'biography', component: BiographyComponent},
   {path: 'draw-code', component: DrawCodeComponent},
];
