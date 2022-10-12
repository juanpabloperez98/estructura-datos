import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { ModulesRoutes } from './modules-routing.module';
import { IntroduccionComponent } from './introduccion/introduccion.component';


@NgModule({
  declarations: [
    ModulesComponent,
    IntroduccionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ModulesRoutes),
  ]
})
export class ModulesModule { }
