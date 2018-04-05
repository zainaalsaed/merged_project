import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { jerusalemschoolsPage } from './jerusalemschools';

@NgModule({
  declarations: [
    jerusalemschoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(jerusalemschoolsPage),
  ],
})
export class jerusalemschoolsPageModule {}
