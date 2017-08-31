import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-print-entry',
  templateUrl: './print-entry.component.html',
  styleUrls: ['./print-entry.component.css']
})
export class PrintEntryComponent implements OnInit {
  @Output() PrintClicked = new EventEmitter<any>();
  flag;


  onPrint(){
    this.flag = print;
    this.PrintClicked.emit({mode: this.flag});
  }
  constructor() { }

  ngOnInit() {
  }

}
