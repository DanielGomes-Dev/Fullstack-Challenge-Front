import { Component, OnInit } from '@angular/core';
import { ProductPost } from 'src/app/shared/model/productsPost.model';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: ProductPost;


  constructor(
    private rest: ProductService,


  ) { }

  ngOnInit(): void {


  }


  addProduct() {
    var title = (<HTMLInputElement>document.getElementById('name')).value;
    let type = (<HTMLInputElement>document.getElementById('type')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let filename = (<HTMLInputElement>document.getElementById('image')).value;
    let height = Number((<HTMLInputElement>document.getElementById('height')).value);
    let width = Number((<HTMLInputElement>document.getElementById('width')).value);
    let price = Number((<HTMLInputElement>document.getElementById('price')).value);
    let rating = 5;

    if (!title || !type || !description || !filename || !height || !width || !price || !rating) {
      alert('Dados Invalidos');
      return
    }

    this.product = {
      title,
      type,
      description,
      filename,
      height,
      width,
      price,
      rating
    }
    this.rest.postProduct(this.product).subscribe(result => { });
    window.location.reload();

  }

}
