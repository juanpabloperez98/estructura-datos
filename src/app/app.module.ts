import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { Approutes } from './app-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { Modulo1IntroduccionComponent } from './modulo1-introduccion/modulo1-introduccion.component';
import { Modulo1TipoComponent } from './modulo1-tipo/modulo1-tipo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Modulo1AbstraccionComponent } from './modulo1-abstraccion/modulo1-abstraccion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ModulosComponent,
    IntroBlankComponent,
    TiposBlankComponent,
    LinealesBlankComponent,
    NoLinealesBlankComponent,
    Modulo1IntroduccionComponent,
    Modulo1TipoComponent,
    Modulo1AbstraccionComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
   
    RouterModule.forRoot(Approutes),
    ReactiveFormsModule
  ],
  exports: [
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
