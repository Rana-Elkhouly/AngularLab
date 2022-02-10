import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab1';
  constructor(private productService: ProductServiceService) { }
  @ViewChild(ProductsComponent) productsComp!: ProductsComponent;

  render(){
    this.productsComp.renderValues();
  }

  addProduct() {
    this.productService.addProduct({

      ID: 4,
      Name: "Lemon2",
      Quantity: 5453,
      Price: 5,
      img: 'src/assets/lemon.jpg'

    })
  }
}
