import { Component, OnInit} from '@angular/core';
import { Producto } from '../models/Producto';
import { Producto2Service } from '../services/producto2.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  producto: Producto = new Producto();
  estado:boolean=true;
  listaProductos: Producto[] = [];

  constructor(private producto2Service:Producto2Service) { }


  ngOnInit(): void {

    this.listarProductos();
  }

  listarProductos()
  {
    this.listaProductos=[];
    this.producto2Service.listarProductos().subscribe((res:any) =>{

      this.listaProductos=res;
    });
  }

  agregarProducto() {

    this.producto2Service.guardarProducto(this.producto).subscribe((res:any) =>{
      this.producto = new Producto();
      this.listarProductos();
    });

  }

}
