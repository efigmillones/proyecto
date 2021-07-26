import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs';
import { productsInterface } from 'src/app/interfaces/interfaces';
import { Productos } from "../../services/productos.service";

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.css']
})
export class FichaProductoComponent implements OnInit {

  constructor(public route: ActivatedRoute, public producto : Productos) { }

  subscripcion : Subscription;

  public InfoProducto: productsInterface[] = [];

  ngOnInit(): void {
    // console.log(this.route.params['sku']);

    this.subscripcion = this.route.params.subscribe( codigo => {
      // console.log(codigo['sku']);
      this.getInfoProducto(codigo['sku']);
      // if(params['sku'].length > 0){
      //   this.getDatosProducto(params['sku'])
      // }
    });
  }

  ngOnDestroy(){
    this.subscripcion ? this.subscripcion.unsubscribe() : null;
   
  }

  

  getInfoProducto(sku: string){

    this.producto.getProductoxCodigo(sku).subscribe( (response:productsInterface[]) => {
        this.InfoProducto = response;
        console.log(response);
      },
      error => {
        console.log(error);
      })


  }

}
