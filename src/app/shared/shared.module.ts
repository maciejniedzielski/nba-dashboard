import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    MatSortModule,
    MatTableModule,
  ],
  exports: [
    MatSortModule,
    MatTableModule
  ]
})
export class SharedModule { }
