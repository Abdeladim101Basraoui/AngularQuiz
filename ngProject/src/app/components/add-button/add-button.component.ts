import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input()
  text!: string;
@Input() color!: string;


  constructor() { }

  ngOnInit(): void {

  }
  onclick(){
    console.log("event works!");
  }

}
