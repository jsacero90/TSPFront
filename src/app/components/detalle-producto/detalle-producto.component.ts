import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LlamadoapiService } from 'src/app/services/llamadoapi.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  dataproducto;
  constructor(private ServicioRouter: ActivatedRoute,
              private serviceApi: LlamadoapiService) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getId() {
    return this.ServicioRouter.snapshot.paramMap.get('Id');
  }

  getProducto() {
    this.serviceApi.getProducto(this.getId()).subscribe(data => {
      this.dataproducto = data[0];
      console.log(this.dataproducto);
    });
  }

}
