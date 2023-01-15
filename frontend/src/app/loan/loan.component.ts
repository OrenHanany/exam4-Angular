import { Component } from '@angular/core';
import { Accountoperations } from '../Modeles/Accountoperations';
import { AccountoperationsServices } from '../servises/Accountoperations.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  title = 'myaccount';
  myoperations:Accountoperations[]= []
  constructor(private prodSrv:AccountoperationsServices){
    this.myoperations=[];
  }
  onsubmit(accountnumber:string, sum:number, date:string ,interest:number,payments:number){
    console.log(accountnumber)
    let type = "loan";
    this.prodSrv.addItem({accountnumber,type, sum, date, interest, payments}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myoperations = res))
  }
}
