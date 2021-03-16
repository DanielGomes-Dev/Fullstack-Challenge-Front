import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';
import { ProductGet } from '../shared/model/productsGet.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: any;

  constructor(
    private rest: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.rest.getProducts().subscribe(data => {
      this.allProducts = data
    });
  }

}
