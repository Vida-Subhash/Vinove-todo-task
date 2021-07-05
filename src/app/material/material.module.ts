import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

// import {MatFormModule} from '@angular/material/form-field'
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule

  ]
})
export class MaterialModule { }
