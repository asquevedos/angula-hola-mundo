import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:Producto[]=[];
  private url = 'http://localhost:8080/api/';
  private url2 = 'http://localhost:8080/api/productos';
  constructor(  private _http: HttpClient) { }

  listarProductos(){

    return this._http.get<Producto[]>(
      `${this.url}productos`);
   }

   getProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.url2)
  }
}
