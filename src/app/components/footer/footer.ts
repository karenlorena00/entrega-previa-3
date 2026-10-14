import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Pie de página con enlaces de navegación. */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  readonly anio = new Date().getFullYear();
}
