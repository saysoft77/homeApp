import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    MainMenuComponent,
    MainSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
