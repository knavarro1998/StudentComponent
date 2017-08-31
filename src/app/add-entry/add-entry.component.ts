import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Output() AddClicked = new EventEmitter<any>();
  @Input() message;
  flag;
  
  onAdd(){
    //this.flag = 'add';
    this.AddClicked.emit({mode: this.flag});
  }
  constructor() { }

  ngOnInit() {
  }

}
