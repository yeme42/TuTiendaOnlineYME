import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/model/productos';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit{

  @Input() producto: Productos | undefined;


  ngOnInit(){
    console.log(this.producto)
  }


}
