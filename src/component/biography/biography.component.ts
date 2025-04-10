import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavRouterOutletComponent } from "../nav-router-outlet/nav-router-outlet.component";

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss',
  imports: [CommonModule, NavRouterOutletComponent]
})
export class BiographyComponent {
  techArray: Array<string> = ['HTML','CSS', 'Javascript', 'PHP', 'mySQL', 'Java', 'Python', 'Typescript', 'Vue', 'Laravel', 'Angular', 'Boostrap', 'Tailwind', 'Angular Material', 'PrimeNG'];
}
