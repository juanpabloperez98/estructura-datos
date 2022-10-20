import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    EjemplosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
