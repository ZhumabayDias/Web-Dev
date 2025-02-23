import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(productRemove:Product){
    this.products = this.products.filter(product => product !== productRemove);
  }
}
