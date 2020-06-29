import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarComponent } from './components/car/car.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AuthGuard } from './services/auth.guard';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PagarComponent } from './components/pagar/pagar.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'car', component: CarComponent, canActivate: [AuthGuard]},
  {path: 'contacto', component: ContactenosComponent},
  {path: 'administrar', component: AdministradorComponent, canActivate: [AuthGuard]},
  {path: 'pagar', component: PagarComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
