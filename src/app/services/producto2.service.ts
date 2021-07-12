import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class Producto2Service {

  private url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  listarProductos(){
    return this.http.get<Producto[]>(this.url+'productos/');
  }

  guardarProducto(producto:Producto)
  {
    let json= JSON.stringify(producto);
    let params = json;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url+'producto/',json, { headers: headers })
    .pipe(
      map((data) => {
        return data;
      })
    );
  }
}
