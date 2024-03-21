import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Productos } from 'src/app/model/productos';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit, OnDestroy {
  
  producto: Productos[] = []
  productSubs: Subscription | undefined

  constructor(private productService : ProductoService){
  }
  ngOnDestroy(): void {
    this.productSubs?.unsubscribe
  }
    ngOnInit(){
     this.productSubs = this.productService.getProduct().subscribe({
        next: (producto: Productos[])=>{
        this.producto = producto
        console.log(this.producto)
      },error:(err:any)=>{
      console.error(err)
    },
    complete:()=>{
    console.log('completado')}
      })
  }



}
