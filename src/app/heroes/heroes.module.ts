import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    BuscarComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    FlexLayoutModule,
    FormsModule,
    DynamicFormsMaterialUIModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
