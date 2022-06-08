import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Components/button/button.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainHeaderComponent } from './Components/main-header/main-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
