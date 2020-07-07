import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { LlamadoapiService } from 'src/app/services/llamadoapi.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  dataCategorias;
  dataProductos;
  constructor(private snipper: LoadingService,
              private serviceApi: LlamadoapiService) { }

  ngOnInit(): void {
    this.snipper.loading();
    this.getCategorias();
    this.getproductos();
  }

  getproductos() {
    this.serviceApi.getProductos().subscribe(data => {
      this.dataProductos = data;
      console.log(data);
    });
  }

  getCategorias(){
    this.serviceApi.getCategorias().subscribe(data => this.dataCategorias = data);
  }

}
