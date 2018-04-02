import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { jeninschoolsPage } from './jeninschools';

@NgModule({
  declarations: [
    jeninschoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(jeninschoolsPage),
  ],
})
export class jeninschoolsPageModule {}
