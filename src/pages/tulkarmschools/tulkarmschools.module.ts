import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { tulkarmschoolsPage } from './tulkarmschools';

@NgModule({
  declarations: [
    tulkarmschoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(tulkarmschoolsPage),
  ],
})
export class tulkarmschoolsPageModule {}
