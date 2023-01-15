import { Component } from '@angular/core';
import { Accountoperations } from 'src/app/Modeles/Accountoperations';
import { AccountoperationsServices } from 'src/app/servises/Accountoperations.service';

@Component({
  selector: 'app-contact',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class ContactComponent {
  title = 'myaccount';
  myoperations:Accountoperations[]= []
  constructor(private prodSrv:AccountoperationsServices){
    this.myoperations=[];
  }
  onsubmit(accountnumber:string, sum:number, dateonly:string){
    console.log(accountnumber)
    const date = dateonly.toString().split('T')[0];
    let type = "deposit";
    let interest= 0;
    let payments= 1;
    this.prodSrv.addItem({accountnumber,type, sum, date, interest, payments}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myoperations = res))
  }
}
