import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Manager';
  constructor() { }

  // live cycle methode run when the component load
  ngOnInit(): void {
  }
toggleAddTask(){
  console.log('event emitted!');
}
}
