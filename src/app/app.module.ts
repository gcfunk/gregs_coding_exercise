import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SmallComponent } from './small/small.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  { path: 'small', component: SmallComponent },
  { path: 'dogs', component: DogsComponent },
  { path: '**', component: DogsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SmallComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
