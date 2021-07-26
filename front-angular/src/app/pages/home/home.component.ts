import { Component, OnInit } from '@angular/core';
import { Productos } from "../../services/productos.service";
import { productsInterface, filtro } from '../../interfaces/interfaces';
import { createRegularExpressionLiteral } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productosService: Productos) { }

  listaProductos: productsInterface[] = [];
  // public listaCategorias: productsInterface{} = [];
  // public listaMarcas: productsInterface{} = [];

  ngOnInit(): void {
    
    this.getproducto({
      nombre: '',
      categoria: '',
      marca: ''
    });
    
  }

  getproducto(data : filtro){
    this.productosService.getProductos(data)
      .subscribe( (data:productsInterface[]) => {
        this.listaProductos = data;
        console.log(data);        
      });    
  }

  procesaPropagar(data : filtro) {

    this.getproducto(data);
    // this.listaProductos = mensaje;
  }

}
