import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para "Home"
  { path: 'add', component: AddComponent }, // Ruta para "Nuevo"
];

@NgModule({
  declarations: [  AppComponent,],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AddComponent,
    HeaderComponent,
    HomeComponent,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule {}
