import { Component } from '@angular/core';
import { Accountoperations } from '../Modeles/Accountoperations';
import { AccountoperationsServices } from '../servises/Accountoperations.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {
  title = 'myaccount';
  myoperations:Accountoperations[]= []
  constructor(private prodSrv:AccountoperationsServices){
    this.myoperations=[];
  }
  onsubmit(accountnumber:string, sum:number, date:string){
    console.log(accountnumber)
    let type = "withdrawal";
    let interest= 0;
    let payments= 1;
    this.prodSrv.addItem({accountnumber,type, sum, date, interest, payments}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myoperations = res))
  }
}
