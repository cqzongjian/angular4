import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  constructor() {
    this.product = new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/resources/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99)
  }

  ngOnInit() {
  }

}
