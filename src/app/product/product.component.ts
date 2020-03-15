import { Component, OnInit } from "@angular/core";
import { product } from "../product";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  product: product = {
    name: "Item 1",
    price: 24,
    desc: "good product",
    status: true
  };
}
