import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';

/** Componente raíz: encabezado y pie fijos con el contenido de cada ruta en medio. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {}
