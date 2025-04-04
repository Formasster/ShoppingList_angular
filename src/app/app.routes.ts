import { Routes } from '@angular/router';
import { Item } from './models/item';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

export const routes: Routes = [

  {
    path: '',
    component:ItemsComponent 
  },
  {
    path: 'add',
    component:AdditemComponent
  }
];
