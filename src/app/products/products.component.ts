import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurchased: boolean;

  constructor() {
    this.Discount = DiscountOffers.Discount0;
    this.storeName = "My Kitchen";
    this.storeLogo = "Kitchen";
    this.productList = [{
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

    this.categoryList = [{
      ID: 1,
      Name: "Fruits"
    },
    {
      ID: 2,
      Name: "Vegetabes"
    }];

    this.clientName = "Rana";
    this.isPurchased = true;
  }

  ngOnInit(): void {
  }
  toggled(){
    this.isPurchased = !this.isPurchased;
  }
}
