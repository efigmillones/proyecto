import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { ProductCardComponent } from './home/components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    FichaProductoComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    SharedModule,    
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
})
export class PagesModule { }
