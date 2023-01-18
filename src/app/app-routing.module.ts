import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';

import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './service/auth.guard';
import { StockComponent } from './components/stock/stock.component';
import { StockListingComponent } from './components/stock-listing/stock-listing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'createStock',
    component: StockComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editStock/:id',
    component: StockListingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//import { AltaClientsComponent } from './components/clientes/alta-clients/alta-clients.component';
//import { ItemclienteComponent } from './components/clientes/itemcliente/itemcliente.component';
//import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
