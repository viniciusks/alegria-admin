import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [],
})
export class PlayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('[OK] PlayerComponent');
  }
}
