import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Payment } from '../../providers/payment';



/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentsreceived',
  templateUrl: 'paymentsreceived.html',
})
export class PaymentsreceivedPage {

  loading: any;
  payments: any;

  constructor(public navCtrl: NavController,  public paymentService: Payment, 
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
  }

  ionViewDidLoad(){

    this.paymentService.getPayments().then((data) => {
                  this.payments = data;
    }, (err) => {
        console.log("not allowed");
    });

  }

  refresh () {

    this.paymentService.getPayments().then((data) => {
                  this.payments = data;
    }, (err) => {
        console.log("not allowed");
    });

  }
  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Working...'
    });

    this.loading.present();

  }

  showPayment(payment) {
     this.navCtrl.push('PaymentviewPage', {payment: payment});
  }




}
