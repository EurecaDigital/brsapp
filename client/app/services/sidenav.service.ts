import { Injectable, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {

  public sideNav:MatSidenav;
  constructor() { }
}
