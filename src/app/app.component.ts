import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentsCollection;
  message;
  print;

  studentRecord: {
    studNo: number,
    studFirstName: string,
    studLastName: string,
    studProgram: string,
    studYear: string
  };

  checkPatterns(value: any, pattern: RegExp): boolean {
    if (pattern.test(value))
      return true;
    else
      return false;
  }

  addEvent(dataSet){
    this.studentRecord = dataSet;
    const stringPattern = /^[A-z\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const yearPattern = /^[1-5]+$/;
    if (this.checkPatterns(this.studentRecord.studNo, numberPattern) && this.checkPatterns(this.studentRecord.studFirstName, stringPattern) &&
      this.checkPatterns(this.studentRecord.studLastName, stringPattern) && this.checkPatterns(this.studentRecord.studProgram, stringPattern) &&
      this.checkPatterns(this.studentRecord.studYear, yearPattern)){
        this.studentsCollection.push(this.studentRecord);
        this.message = null;
        return true;

      }
      else {
        this.message = "EROOOOOOOOOOOOOOOOOOOOOOOOOOR!";
        return false;
      }
      
  }

  printEvent(){
    this.print = true;
    return this.print;
  }


}
