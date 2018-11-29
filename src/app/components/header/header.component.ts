import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private apiservice: ApiService) {
  }

  ngOnInit() {
  }

  changeLanguage(lang){
    this.translate.use(lang).subscribe();
    this.apiservice.lang = lang;
  }
}
