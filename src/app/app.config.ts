import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';

import { routes } from './app.routes';

registerLocaleData(localeEs);

/**
 * Configuración global de la aplicación.
 * - withHashLocation: las rutas usan "#/", así recargar una página interna funciona en GitHub Pages.
 * - withComponentInputBinding: el parámetro :id de la ruta llega como @Input al componente de detalle.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation(), withComponentInputBinding()),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es' },
  ],
};
