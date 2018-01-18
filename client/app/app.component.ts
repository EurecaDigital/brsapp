import { AuthService } from './services/auth.service';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Injectable, ViewChild, OnInit,OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './services/sidenav.service';
import { CatService } from './services/cat.service';
import { CepService } from './services/cep.service';
import { SharedModule } from "./shared/shared.module";

import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';


@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit,OnDestroy {

  private _activeMQC: MediaChange;
  private _watcher: Subscription;

  firstCol = 'row';
  firstColXs = 'column';
  firstColMd = 'column';
  firstColLg = 'invalid';
  firstColGtLg = 'column';

  secondCol = 'column';

  isVisible = true;

  @ViewChild('sidenav') public sideNav: MatSidenav;
  
  ngOnInit() {
    this.sidenavService.sideNav = this.sideNav;
    this.sidenavService.sideNav.close();
  }

  constructor(public auth: AuthService, 
    private sidenavService: SidenavService,
    private cepService:CepService,
    private _media$: ObservableMedia) { 
      this._watcher = this._media$
      .subscribe((e: MediaChange) => {
        this._activeMQC = e;
      });
    }

    ngOnDestroy() {
      this._watcher.unsubscribe();
    }
  
    toggleLayoutFor(col) {
      switch (col) {
        case 1:
  
          col = `firstCol${this._activeMQC ? this._activeMQC.suffix : ''}`;
          this[col] = (this[col] === 'column') ? 'row' : 'column';
          break;
  
        case 2:
          col = 'secondCol';
          this[col] = (this[col] == 'row') ? 'column' : 'row';
          break;
      }
    }



}