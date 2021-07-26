import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';

// components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
        headerLayout: 'classic'
    }
  },
  {
    path: 'ficha/:sku',
    component: FichaProductoComponent,
    data: {
        headerLayout: 'classic'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
