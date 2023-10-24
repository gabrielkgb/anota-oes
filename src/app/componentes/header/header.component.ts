import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public appPages = [
    { title: 'xero', url: '/folder/inbox', icon: 'home' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'person' },
    
  ];

  constructor() { }

  ngOnInit() {}

}
