import { Component, OnInit } from "@angular/core";
import {product} from "../product"
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products: product[] = [
  {name: "Item 1",price: 24,desc: "good product 1",status: true},
  {name: "Item 1",price: 24,desc: "good product 1",status: true}
  ]
}
