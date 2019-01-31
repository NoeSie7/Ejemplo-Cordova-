import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actualLanguage = 'en';
  showLanguagesPhone = false;

  constructor(
    private translate: TranslateService,
    private apiservice: ApiService
  ) {}

  ngOnInit() {}

  changeLanguage(lang) {
    this.apiservice.lang = lang;
    this.actualLanguage = this.apiservice.lang;
    this.translate.use(lang).subscribe();
  }

  expandLanguage() {
    this.showLanguagesPhone = !this.showLanguagesPhone;
  }
}
