import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage),
    HttpClientModule
  ],
  providers: [
    BitcoinProvider,
  ],
})
export class BitcoinPageModule {}
