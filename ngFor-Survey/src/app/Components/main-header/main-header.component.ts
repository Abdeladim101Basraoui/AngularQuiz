import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  title = 'Angular 14 survey';

  
  constructor() { }

  ngOnInit(): void {
  }

  AddTask()
  {
    console.log('click  add task');
    
  }

}
