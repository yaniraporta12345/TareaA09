import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DirectivaComponent]
  
})
export class Pagina1Module {}
