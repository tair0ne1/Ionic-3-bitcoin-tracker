import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency = 'BRL';
  bitcoin$: Observable<Bitcoin>; 

  constructor(private provider: BitcoinProvider) {
  }

  ionViewWillLoad() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.provider.getBitcoinPrice(this.currency);
  }

}
