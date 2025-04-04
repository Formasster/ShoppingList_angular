import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { TotalComponent } from '../total/total.component';
import { ItemService } from '../../services/item.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent, TotalComponent, HttpClientModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  items: Item[] = [];
  total: number = 0;

  constructor(private itemservice: ItemService) {
    /*this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 1.99,
        quantity: 4,
        completed: false,
      },
      {
        id: 1,
        title: 'pan',
        price: 0.99,
        quantity: 1,
        completed: false,
      },
    ];*/
  }

  ngOnInit(): void {
    //this.items = [];
    this.itemservice.getItems().subscribe((data) =>{
      this.items = data;
      this.getTotal();
    });
  }

  deleteItem(item: Item):void {
    this.itemservice.deleteItem(item).subscribe(
      () => {
        this.items = this.items.filter((i) => i.id !== item.id);
        this.getTotal();
      }
    );
  }

  onToggleItem(item: Item): void {
    item.completed = !item.completed; 
    this.getTotal(); 
  }

  getTotal():void {
    this.total = this.items
                .filter(i => i.completed)
                .map(i => i.quantity * i.price)
                .reduce((access, item) =>access += item, 0);
  }
}
