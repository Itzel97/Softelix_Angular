import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/navbar.component';
import { CarouselComponent } from './components/carusel/carusel.component';
import { NuevasPeliculasComponent } from './components/nuevasPeliculas/nuevasPeliculas.component';
import { ContenioInicioComponent } from './components/contenidoInicio/contenidoInicio.component';

@NgModule({
  declarations: [
    AppComponent, NabvarComponent, CarouselComponent, NuevasPeliculasComponent, ContenioInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
