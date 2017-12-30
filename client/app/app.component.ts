import { AuthService } from './services/auth.service';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './services/sidenav.service';
import { CatService } from './services/cat.service';
import { CepService } from './services/cep.service';

import { Subscription } from 'rxjs/Subscription';


@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sideNav: MatSidenav;
  
  ngOnInit() {
    this.sidenavService.sideNav = this.sideNav;
    this.sidenavService.sideNav.close();
  }

  constructor(public auth: AuthService, 
    private sidenavService: SidenavService,
    private cepService:CepService) { }



}