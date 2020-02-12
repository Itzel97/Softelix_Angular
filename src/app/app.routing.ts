import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import{NuevasPeliculasComponent} from "./components/nuevasPeliculas/nuevasPeliculas.component";
import{PeliculaComponent} from "./components/pelicula/pelicula.component";
import{ContenioInicioComponent} from "./components/contenidoInicio/contenidoInicio.component";
import{GeneroComponent} from"./components/generos/generos.component";
import {LogInComponent} from "../app/components/logIn/logIn.component"
const appRoutes: Routes = [
    { path: "", component: ContenioInicioComponent },
    { path: "action", component: GeneroComponent},
    { path: "next-releases", component: NuevasPeliculasComponent},
    { path: "birds-of-prey", component: PeliculaComponent},
    { path: "**", component: ContenioInicioComponent },

  ];
  
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
