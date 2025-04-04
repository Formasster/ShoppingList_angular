import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {

  constructor(private itemService:ItemService, private router:Router) { }

  id:number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(['/']);
  }

}
