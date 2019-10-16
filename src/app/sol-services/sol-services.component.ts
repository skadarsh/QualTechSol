import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sol-services',
  templateUrl: './sol-services.component.html',
  styleUrls: ['./sol-services.component.scss']
})
export class SolServicesComponent implements OnInit {

  constructor() {
    
    this.openMenu();
  };

  ngOnInit() {
    // setTimeout(this.openMenu , 1000);
  }

  openMenu(){


    $('body').removeClass('noScroll');
    if ($('.collapse').hasClass('collapse-active')) {
        $('.collapse').removeClass('collapse-active');
    }
    else {
        $('.collapse').addClass('collapse-active');
    }
}

}
