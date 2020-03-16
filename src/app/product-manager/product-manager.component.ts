import { Component, OnInit } from '@angular/core';
import { product } from "../model/product";
import { data } from '../model/mockData';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  PrList= new ProductListComponent();
  constructor() {
    
  }
 
  ngOnInit(): void {
  }

  // selected:product;
  
  products=data;

  removeItem(id) {
    return this.products = this.products.filter(p => p.id != id);
  }
}
