import { Component } from '@angular/core';
import { Accountoperations} from './Modeles/Accountoperations';
import { AccountoperationsServices } from './servises/Accountoperations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  myoperations:Accountoperations[]= []
  constructor(private prodSrv:AccountoperationsServices){
    prodSrv.getItems().subscribe(res=> this.myoperations= res );
  }
  // onSubmit(price:number,name:string){
  //     this.prodSrv.addItem({name,price}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
  //     console.log(price , name)
  // }
  // deletep(id:any){
  //     console.log(id)
  //     this.prodSrv.deleteItem(id).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
  // }
  // updatep(id:any,name:string,price:number){
  //     this.prodSrv.updateItem({id,name,price}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
  // }

}
