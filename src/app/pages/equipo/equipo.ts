import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.html',
  styleUrl: './equipo.css',
})
export class Equipo {
  mostrarFormulario: boolean = false;

  // Lista dinámica de operarios
  operarios = [
    { avatar: 'CM', nombre: 'Carlos Mendoza', role: 'Encargado de Picking', zone: 'Almacén Central', status: 'online' },
    { avatar: 'RG', nombre: 'Ramiro Gómez', role: 'Transportista Especializado', zone: 'Despacho Externo', status: 'busy' },
    { avatar: 'AA', nombre: 'Ana Aranda', role: 'Ingeniera de Soporte', zone: 'Postventa y Clientes', status: 'online' },
    { avatar: 'JS', nombre: 'Jorge Silva', role: 'Supervisor de Inventario', zone: 'Almacén Químico', status: 'offline' }
  ];

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Función práctica para agregar el nuevo operario a la lista
  agregarOperario(nombre: string, avatar: string, role: string, zone: string, event: Event): void {
    event.preventDefault(); // Evita que la página se recargue

    // Si los campos básicos están vacíos, no hace nada
    if (!nombre || !avatar || !role || !zone) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Insertamos el nuevo objeto al arreglo (por defecto entra 'online')
    this.operarios.push({
      avatar: avatar.toUpperCase(),
      nombre: nombre,
      role: role,
      zone: zone,
      status: 'online'
    });

    // Limpiamos y cerramos el formulario flotante
    this.toggleFormulario();
  }
}
