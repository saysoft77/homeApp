// material.module.ts 
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
