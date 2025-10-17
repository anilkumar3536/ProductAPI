import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://fakestoreapi.com/products/';

  constructor(public http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  getProductData(id:any){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

}
