import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { get } from 'http';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ItemsComponent, CommonModule, ItemComponent, FormsModule],
  providers: [provideHttpClient()],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-list';
  total: number = 0;
}