import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { productsInterface, filtro } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  constructor(private http: HttpClient) { }

  getProductos(data : filtro){
    return this.http.get<productsInterface[]>(`http://localhost:3000/productos?nombre=${data.nombre}&marca=${data.marca}&categoria=${data.categoria}`);
  }

  getCategorias(){
    return this.http.get<productsInterface[]>('http://localhost:3000/categorias');
  }

  getMarcas(){
    return this.http.get<productsInterface[]>('http://localhost:3000/marcas');
  }

  getProductoxCodigo(codigo: string){
    return this.http.get<productsInterface[]>(`http://localhost:3000/getProductoxCodigo/${codigo}`);
  }

}
