import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesNotaPageRoutingModule } from './detalles-nota-routing.module';

import { DetallesNotaPage } from './detalles-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesNotaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetallesNotaPage]
})
export class DetallesNotaPageModule {}
