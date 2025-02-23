import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  ngOnInit() {
    this.product.selectedImage = this.product.images[0];
  }
   

  previousImage() {
    const index = this.product.images.indexOf(this.product.selectedImage ?? '');
    this.product.selectedImage = this.product.images[(index - 1 + this.product.images.length) % this.product.images.length];
  }
  
  nextImage() {
    const index = this.product.images.indexOf(this.product.selectedImage ?? '');
    this.product.selectedImage = this.product.images[(index + 1) % this.product.images.length];
  }

  increaseLike(){
    this.product.like++;
  }

  deleteItem(){
    this.remove.emit(this.product);
  }

  shareProduct() {
    const message = `Check out ${this.product.name} on Kaspi.kz! ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
