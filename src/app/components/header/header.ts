import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/** Barra de navegación principal; resalta el enlace de la ruta activa. */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class HeaderComponent {}
