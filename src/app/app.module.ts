import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';
import { CarComponent } from './components/car/car.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PagarComponent } from './components/pagar/pagar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    DetalleProductoComponent,
    AdministradorComponent,
    ModificarProductosComponent,
    CarComponent,
    ContactenosComponent,
    PagarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
