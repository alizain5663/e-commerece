import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  CreateProductCard(Payload:any){
    return this.HttpClient.post('http://localhost:1111/ProductManagement/ProductData',Payload);
  }

  GetAllProducts(){
    return this.HttpClient.get('http://localhost:1111/ProductManagement/GetProductData');
  }

  GetProductById(_id:any){
    return this.HttpClient.get(`http://localhost:1111/ProductManagement/GetProductById/${_id}`)
  }

  DeleteProductById(_id:any){
    return this.HttpClient.delete(`http://localhost:1111/ProductManagement/DeleteProductById/${_id}`);
  }

  HardDeleteProductById(_id:any){
    return this.HttpClient.delete(`http://localhost:1111/ProductManagement/HardDelete/${_id}`)
  }

  UpdateById(payLoad:any){
    return this.HttpClient.post(`http://localhost:1111/ProductManagement/UpdateById`,payLoad);
  }
}