import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-router-outlet',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-router-outlet.component.html',
  styleUrl: './nav-router-outlet.component.scss'
})
export class NavRouterOutletComponent {

}
