import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing-module.module';
import { MainSelectVerseComponent } from './main-select-verse/main-select-verse.component';
import { MainSayVerseComponent } from './main-say-verse/main-say-verse.component';
import { MainPlansComponent } from './main-plans/main-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    MainMenuComponent,
    MainSidebarComponent,
    MainSelectVerseComponent,
    MainSayVerseComponent,
    MainPlansComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
