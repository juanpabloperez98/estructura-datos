import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }