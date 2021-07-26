import { Component, OnInit, Input } from '@angular/core';
import { productsInterface } from '../../../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public router: Router) { }

  @Input("producto") producto : productsInterface;

  ngOnInit(): void {


  }

  verProducto(sku:string){
    if(sku.length < 1){
      return;
    }
    this.router.navigate(['/ficha', sku])
  };

}
