import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ProjetoService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getProjetos(): Observable<any> {
    return this.http.get('/api/projetos').map(res => res.json());
  }

  countProjetos(): Observable<any> {
    return this.http.get('/api/projetos/count').map(res => res.json());
  }

  addProjeto(projeto): Observable<any> {
    return this.http.post('/api/projeto', JSON.stringify(projeto), this.options);
  }

  editProjeto(projeto): Observable<any> {
    return this.http.put(`/api/projeto/${projeto._id}`, JSON.stringify(projeto), this.options);
  }

  deleteProjeto(projeto): Observable<any> {
    return this.http.delete(`/api/projeto/${projeto._id}`, this.options);
  }

}




