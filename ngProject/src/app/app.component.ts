import { Component } from '@angular/core';

// mes pour etre un composent il faut instancier le decorator @Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 1er est la class du composent
export class AppComponent {
  title:string = 'Task Manager';
}
