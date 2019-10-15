import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSelectVerseComponent } from './main-select-verse/main-select-verse.component'; 
import { MainSayVerseComponent } from './main-say-verse/main-say-verse.component'; 

const routes: Routes = [
  {
    path: '',
    component: MainSelectVerseComponent
  },
    {
    path: 'sayVerse',
    component: MainSayVerseComponent
  }
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
