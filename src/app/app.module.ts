import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/navbar.component';
import { CarouselComponent } from './components/carusel/carusel.component';
import { NuevasPeliculasComponent } from './components/nuevasPeliculas/nuevasPeliculas.component';
import { ContenioInicioComponent } from './components/contenidoInicio/contenidoInicio.component';
import { TopComponent } from './components/tops/tops.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { LikeComponent } from './components/like/like.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { MoviesService } from './services/movies/movie.service';
import { GeneroComponent } from './components/generos/generos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { LogInComponent} from './components/logIn/logIn.component';

@NgModule({
  declarations: [
    AppComponent, NabvarComponent, CarouselComponent, NuevasPeliculasComponent, ContenioInicioComponent,TopComponent, FooterComponent, PeliculaComponent, LikeComponent, ComentariosComponent, GeneroComponent, LogInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, SlickCarouselModule,routing,HttpClientModule
  ],
  providers: [MoviesService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
