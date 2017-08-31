import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {
  @Input() print = true;
  @Input() studentsCollection;
  constructor() { }

  ngOnInit() {
  }

}
