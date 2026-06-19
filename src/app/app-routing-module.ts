import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importamos los componentes reales de las páginas
import { Login } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { Almacen } from './pages/almacen/almacen';
import { Despacho } from './pages/despacho/despacho';
import { Postventa } from './pages/postventa/postventa';

// 2. Definimos las rutas de navegación para la tienda
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'almacen',
    component: Almacen
  },
  {
    path: 'despacho',
    component: Despacho
  },
  {
    path: 'postventa',
    component: Postventa
  }
];

// 3. Configuramos el módulo de rutas y lo EXPORTAMOS correctamente
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Asegúrate de importar FormsModule y CommonModule aquí
  exports: [RouterModule]
})
export class AppRoutingModule { } // <-- Asegúrate de que se llame exactamente así