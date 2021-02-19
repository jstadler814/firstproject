import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-here-button',
  templateUrl: './here-button.component.html',
  styleUrls: ['./here-button.component.sass']
})
export class HereButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openDialog(){
    alert("I'm Here");
  }
}
