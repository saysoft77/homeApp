// material.module.ts 
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
