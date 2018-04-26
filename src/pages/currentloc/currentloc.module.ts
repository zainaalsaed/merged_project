import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentlocPage } from './currentloc';

@NgModule({
  declarations: [
    CurrentlocPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentlocPage),
  ],
})
export class CurrentlocPageModule {}
