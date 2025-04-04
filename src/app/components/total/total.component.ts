import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent{
  @Input() total:number = 0;  
  @Input() mensaje:string = '';
  
  constructor() {}

  ngOnInit(): void {
    
    
  }
}
