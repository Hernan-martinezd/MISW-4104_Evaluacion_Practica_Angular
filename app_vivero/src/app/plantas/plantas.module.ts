import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './plantas.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantaComponent],
  exports: [PlantaComponent]
})
export class PlantasModule { }
