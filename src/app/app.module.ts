import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { PrintEntryComponent } from './print-entry/print-entry.component';
import { PrintingComponent } from './printing/printing.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    AddEntryComponent,
    PrintEntryComponent,
    PrintingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
