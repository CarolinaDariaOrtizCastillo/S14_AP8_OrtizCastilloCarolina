import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './pages/home/home';
import { Almacen } from './pages/almacen/almacen';
import { Despacho } from './pages/despacho/despacho';
import { Postventa } from './pages/postventa/postventa';
import { Login } from './pages/login/login';
import { NavbarComponent } from './components/navbar/navbar';

@NgModule({
  declarations: [App, HomeComponent, Almacen, Despacho, Postventa, Login, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
