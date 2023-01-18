import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';
import { StockComponent } from './components/stock/stock.component';

import { StockListingComponent } from './components/stock-listing/stock-listing.component';
import { CoroucelComponent } from './components/coroucel/coroucel.component';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    CallbackComponent,
    StockComponent,

    StockListingComponent,
    CoroucelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,

    AuthModule.forRoot({
      domain: 'dev-ytdgzjci0gdqzhyl.us.auth0.com',
      clientId: 'O6CkVYwv7kjfVK501V2IK3gyf1OD0nnr',
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
