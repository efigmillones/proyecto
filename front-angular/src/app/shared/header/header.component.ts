import { Component, OnInit, Output, EventEmitter, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { productsInterface } from '../../interfaces/interfaces';
import { Productos } from "../../services/productos.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<any>()

  profileForm = new FormGroup({
    categoria: new FormControl(''),
    marca: new FormControl(''),
    nombre : new FormControl('')
  });

  subscripcion : Subscription;

  constructor(public productos: Productos) { }

  listaCategorias: productsInterface[] = [];
  listaMarcas: productsInterface[] = [];

  ngOnInit(): void {
    
    this.subscripcion = this.productos.getCategorias()
    .subscribe( (data:productsInterface[]) => {
      this.listaCategorias = data;
      // console.log(data); 
    });

    this.subscripcion = this.productos.getMarcas()
      .subscribe( (data:productsInterface[]) => {
        this.listaMarcas = data;
        // console.log(data); 
      });

  }

  ngOnDestroy(){
    this.subscripcion ? this.subscripcion.unsubscribe() : null;
   
  }

  getData(){
    let data = {
      categoria : this.profileForm.value.categoria,
      marca : this.profileForm.value.marca,
      nombre : this.profileForm.value.nombre
    }
    this.propagar.emit(data);
  }




}
