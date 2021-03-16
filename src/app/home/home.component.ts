import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/service/product.service';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: any;
  product: any;


  constructor(
    private rest: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  addProduct() {
    this.dialog.open(AddProductComponent);
  }

  getProducts() {
    this.rest.getProducts().subscribe(data => {
      this.allProducts = data
    });
  }

  getProductById(id) {
    this.rest.getProductById(id).subscribe(data => {
      this.product = data
    });
  }


  editProduct(id) {
    console.log('editando' + id);
  }

  deleteProduct(id) {
    if (confirm("Deletar esse produto?")) {
      this.rest.deleteProducById(id).subscribe(data => {
        console.log('deletado')
      })
      window.location.reload();
    };

  }

}
