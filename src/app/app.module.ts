import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importation de CommonModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes'; // Importation des routes depuis app.routes.ts
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    PokemonModule,
    RouterModule.forRoot(routes) // Configuration des routes à partir de app.routes.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
