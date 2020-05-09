import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatStepperModule } from "@angular/material/stepper";
import  {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
