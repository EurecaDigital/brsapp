import { AuthService } from './services/auth.service';
import { SidenavService } from "./services/sidenav.service";
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {


  constructor(public auth: AuthService) {  }


  ngOnDestroy(): void { }

}
