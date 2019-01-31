import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POCBarceloHotelesAngular';

  constructor(translate: TranslateService, apiservice: ApiService) {
    translate.addLangs(['en', 'es']);
    translate.use(apiservice.lang);
  }
}
