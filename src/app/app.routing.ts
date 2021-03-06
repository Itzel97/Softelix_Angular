import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import{NuevasPeliculasComponent} from "./components/nuevasPeliculas/nuevasPeliculas.component";
import{PeliculaComponent} from "./components/pelicula/pelicula.component";
import{ContenioInicioComponent} from "./components/contenidoInicio/contenidoInicio.component";
import{GeneroComponent} from"./components/generos/generos.component";
import {LogInComponent} from "../app/components/logIn/logIn.component";
import {NewUserAccountComponent} from "../app/components/newUserAccount/newUserAccount.component";

const appRoutes: Routes = [
    { path: "", component: ContenioInicioComponent },
    { path: "login", component: LogInComponent },
    { path:"register", component:NewUserAccountComponent},
    { path: "action", component: GeneroComponent},
    { path: "next-releases", component: NuevasPeliculasComponent},
    { path: "bad-boys", component: PeliculaComponent},
    { path: "**", component: ContenioInicioComponent },

  ];
  
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
