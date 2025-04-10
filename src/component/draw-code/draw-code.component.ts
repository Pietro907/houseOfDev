import { Component } from '@angular/core';
import { CardDrawComponent } from './card-draw/card-draw.component';
import { CommonModule } from '@angular/common';
import { NavRouterOutletComponent } from "../nav-router-outlet/nav-router-outlet.component";


@Component({
  selector: 'app-draw-code',
  imports: [CardDrawComponent, CommonModule, NavRouterOutletComponent],
  templateUrl: './draw-code.component.html',
  styleUrl: './draw-code.component.scss'
})
export class DrawCodeComponent{


}
