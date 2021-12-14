import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input()
  text!: string;
@Input() color!: string;
// the event emetter by the click
@Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }
  onclick(){
this.btnClick.emit();
  }

}
