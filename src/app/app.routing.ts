import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import {ModulosComponent}from "./components/modulos/modulos.component";


const appRoutes: Routes =[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'modulos',component:ModulosComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);    
