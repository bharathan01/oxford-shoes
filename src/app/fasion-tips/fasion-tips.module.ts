import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FasionTipsComponent } from './fasion-tips/fasion-tips.component';
import { AboutComponent } from './about/about.component';
import { QualityComponent } from './quality/quality.component';



@NgModule({
  declarations: [
    FasionTipsComponent,
    AboutComponent,
    QualityComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    FasionTipsComponent,
    AboutComponent,
    QualityComponent
  ]

})
export class FasionTipsModule { }
