import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: Item = new Item();
  @Output() deleteItem:EventEmitter<Item> = new EventEmitter();
  @Output() toggle:EventEmitter<Item> = new EventEmitter();

  constructor() {}

  onDelete(item:Item){
    this.deleteItem.emit(item);
  }

  onToggle(item:Item){
    this.toggle.emit(this.item);
  }
}
