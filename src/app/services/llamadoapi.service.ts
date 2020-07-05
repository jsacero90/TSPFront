import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlamadoapiService {

  constructor(private http: HttpClient) { }

  private  URL = 'http://localhost:8000/api/';
  private APIKEY = '3370d7fe-929d-47c2-8d49-6769402c382c';

  /*private HEADERS = new HttpHeaders({
    'x-api-key': this.APIKEY,
    'Content-Type': 'application/json'
  });*/

  private getQuery(query: string) {
    const url = `${this.URL}${query}`;
    const headers = new HttpHeaders({
      'x-api-key': this.APIKEY,
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers });
  }

  getCategorias() {
    return this.getQuery('categorias');
  }

}
