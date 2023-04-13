import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayOutModule } from './site-lay-out/site-lay-out.module';
import { HttpClientModule }   from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FasionTipsModule } from './fasion-tips/fasion-tips.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteLayOutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FasionTipsModule
    
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
