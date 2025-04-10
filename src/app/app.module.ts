// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableProjectsComponent } from '../component/table-projects/table-projects.component';
import { CardProjectsComponent } from '../component/card-projects/card-projects.component';
import { PageShowComponent } from '../component/page-show/page-show.component';
import { BiographyComponent } from '../component/biography/biography.component';
import { DrawCodeComponent } from '../component/draw-code/draw-code.component';
import { RepoListComponent } from '../component/repo-list/repo-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    TableProjectsComponent,
    CardProjectsComponent,
    PageShowComponent,
    BiographyComponent,
    DrawCodeComponent,
    RepoListComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
