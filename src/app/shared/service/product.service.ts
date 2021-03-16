import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductPost } from '../model/productsPost.model';
import { ProductGet } from '../model/productsGet.mode';


@Injectable({ providedIn: 'root' })
export class ProductService {

    apiUrl = 'http://localhost:3000/products';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public getProducts(): Observable<ArrayBuffer> {
        try {
            const products = this.httpClient.get<ArrayBuffer>(this.apiUrl);
            return products;
        } catch (err) {
            console.log(err)
        }
    }

    public getProductById(id: Number): Observable<ProductGet> {
        return this.httpClient.get<ProductGet>(this.apiUrl + `/${id}`);
    }

    public postProduct(product: ProductPost): Observable<any> {
        return this.httpClient.post<any>(this.apiUrl, product, this.httpOptions);
    }

    public deleteProducById(id: Number): Observable<ProductPost> {
        try {
            return this.httpClient.delete<ProductPost>(this.apiUrl + `/${id}`);
        } catch (err) {
            console.log(err);
        }
    }


}