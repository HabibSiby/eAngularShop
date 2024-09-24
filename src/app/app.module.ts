import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from "./container/container.component";
import { SharedModule } from './Module/shared/shared.module';
import { FetureModule } from './Module/feture/feture.module';
import { AdminModule } from './Module/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FetureModule,
    AdminModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
