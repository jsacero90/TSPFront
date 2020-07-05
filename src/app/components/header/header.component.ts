import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LlamadoapiService } from '../../services/llamadoapi.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgAvatar;
  dataCategorias;
  constructor(public router: Router,
              public auth: AuthService,
              private serviceApi: LlamadoapiService) { }

  ngOnInit() {
    this.getCategorias();
  }

  private getCategorias(){
    this.serviceApi.getCategorias().subscribe(data => this.dataCategorias = data);
  }

  buscar( termino: string, columna?: any) {
    console.log(termino + '' + columna);
  }
  cambio(e){
    console.log(e);
  }

}
