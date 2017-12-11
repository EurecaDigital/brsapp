import { AuthService } from './services/auth.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
 

  constructor(public auth: AuthService) {  
    
   }

    ngOnDestroy(): void {

  }


}
