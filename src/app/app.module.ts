import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {DxDataGridModule, DxDrawerModule, DxListModule, DxScrollViewModule, DxToolbarModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxToolbarModule, DxScrollViewModule, DxDrawerModule, DxListModule, DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
