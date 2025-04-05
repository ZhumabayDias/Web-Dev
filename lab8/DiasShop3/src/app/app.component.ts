import { Component,OnInit, inject } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  imports: [ProductItemComponent,CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productItemList: Product[] = [];
  filteredItemList: Product[] = [];
  private itemService = inject(ProductService)
  constructor(){
    this.itemService.getProducts().then((productItemList: Product[]) => {
      this.productItemList = productItemList;
      this.filteredItemList = productItemList;});
    }
  filterResults(category: string) {
    this.filteredItemList = category ? this.productItemList.filter(product => product.category === category) : this.productItemList;
  }
}

