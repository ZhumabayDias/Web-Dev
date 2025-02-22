import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[]=[];

  constructor(private productSevice:ProductService){}

  ngOnInit(){
    this.products = this.productSevice.getProducts();

    this.products.forEach(product => {
      product.selectedImage = product.images[0];
    });
  }
  previousImage(product: Product) {
    const currentIndex = product.images.indexOf(product.selectedImage!);
    if (currentIndex > 0) {
      product.selectedImage = product.images[currentIndex - 1];
    } else {
      product.selectedImage = product.images[product.images.length - 1]; // Переключение на последнее фото
    }
  }

  nextImage(product: Product) {
    const currentIndex = product.images.indexOf(product.selectedImage!);
    if (currentIndex < product.images.length - 1) {
      product.selectedImage = product.images[currentIndex + 1];
    } else {
      product.selectedImage = product.images[0]; // Переключение на первое фото
    }
  }
  
  shareProduct(product:Product){
    const message = `Check ${product.name} - ${product.link}`
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`

    window.open(whatsappLink, '_blank')
  }
}
