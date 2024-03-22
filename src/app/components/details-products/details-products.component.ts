import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Productos } from 'src/app/model/productos';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit, OnDestroy {

slug: any | undefined
producto: Productos | undefined
productSubs: Subscription | undefined

currentImg: string | undefined
renderGaleria: boolean = true
galeria: Array<any> = []


  constructor(private route: ActivatedRoute, private productService : ProductoService){
  }
  ngOnDestroy(): void {
    this.productSubs?.unsubscribe
  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
    console.log(this.slug)
    this.productSubs = this.productService.getProduct().subscribe({
      next: (producto: Productos[])=>{
      this.producto = producto.filter( p => p.slug === this.slug )[0]
      this.currentImg = this.producto.imageUrl[0]
      console.log(this.currentImg)
    },error:(err:any)=>{
    console.error(err)
  }})
  }
  verImg(item:string){
    this.currentImg = item
  }

}
