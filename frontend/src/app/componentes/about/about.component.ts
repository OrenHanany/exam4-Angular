import { Component } from '@angular/core';
import { Accountoperations } from 'src/app/Modeles/Accountoperations';
import { AccountoperationsServices } from 'src/app/servises/Accountoperations.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'myaccount';
  myoperations:Accountoperations[]= []
  constructor(private prodSrv:AccountoperationsServices){
    this.myoperations=[];
  }
  onsubmit(accountnumber:number){
    console.log(accountnumber)
    this.prodSrv.getItembyid({accountnumber}).subscribe(res=> this.myoperations= res)
  }
}
