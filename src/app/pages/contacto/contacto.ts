import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

/** Texto no vacío (ignora espacios). */
function noVacio(control: AbstractControl): ValidationErrors | null {
  return String(control.value ?? '').trim().length > 0 ? null : { vacio: true };
}

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Formulario de contacto con Reactive Forms. No hay backend: el envío se simula. */
@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
})
export class ContactoComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly formulario = this.fb.nonNullable.group({
    nombre: ['', noVacio],
    correo: ['', [Validators.required, Validators.pattern(REGEX_CORREO)]],
    asunto: ['', noVacio],
    mensaje: ['', noVacio],
  });

  protected readonly enviado = signal(false);

  /** Un campo muestra error cuando es inválido y el usuario ya lo tocó (blur) o intentó enviar. */
  protected invalido(nombre: 'nombre' | 'correo' | 'asunto' | 'mensaje'): boolean {
    const control = this.formulario.controls[nombre];
    return control.invalid && (control.touched || control.dirty);
  }

  protected enviar(): void {
    this.enviado.set(false);
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    // Sin backend disponible en esta entrega: se simula el envío exitoso.
    this.enviado.set(true);
    this.formulario.reset();
  }
}
