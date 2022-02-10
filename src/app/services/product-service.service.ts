import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList = [{
    ID: 1,
    Name: "Tomato",
    Quantity: 3000,
    Price: 3,
    img: 'src/assets/tomato.jpg'
  },
  {
    ID: 2,
    Name: "Brocoli",
    Quantity: 2056,
    Price: 30,
    img: 'src/assets/brokoli.jpg'
  },
  {
    ID: 3,
    Name: "Lemon",
    Quantity: 5453,
    Price: 5,
    img: 'src/assets/lemon.jpg'
  }
  ];
  watchProducts:BehaviorSubject<IProduct[]>= new BehaviorSubject(this.productList);
  productsListener = this.watchProducts.asObservable();
  constructor() { }
  getAllProducts(){
    // return this.productList;
    return this.productsListener;
  }
  
  GetProductById(prdId:number):any{
    if(isNaN(prdId)){
      return null;
    }
    const product = this.productList.find((productId:IProduct)=>productId.ID===prdId);
    if(!product){
      return null;
    }
    return product;
  }

  addProduct(product:IProduct){
    this.productList.push(product);
    this.watchProducts.next(this.productList)
  }
}
