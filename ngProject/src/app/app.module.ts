import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// decorator ng module pour le creeNgProject il faut faire:
// declaration == declare les web component a chaque fois il y a de nouveau component on les ajouter ici
// import  == specifier les module qu'on peut les importer [BrowserModule] is always used
//            httpClientModule  == interagir avec la partie backend
//            formsModule == utiliser pour gerer les formulaire
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],

  // pour les services de notre projet
    providers: [],

    // spicify the component root to start
  bootstrap: [AppComponent]
})
export class AppModule { }
