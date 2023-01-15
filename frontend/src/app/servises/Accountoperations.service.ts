import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accountoperations } from '../Modeles/Accountoperations';
@Injectable({
  providedIn: 'root'
})
export class AccountoperationsServices {
  URL ="http://localhost:3001/exam4";
  constructor(private http: HttpClient) {}

addItem(Accountoperations: Accountoperations): Observable<Accountoperations> {
    return this.http.post<any>(this.URL+"/accountoperations/add", Accountoperations);
}

// Read
getItems(): Observable<Accountoperations[]> {
    return this.http.get<any[]>(this.URL+"/all");
}

getItembyid(account:any): Observable<Accountoperations[]> {
  console.log(account.accountnumber)
  return this.http.get<any[]>(this.URL+"/accountoperations/"+account.accountnumber);
  // /accountoperations/account
}

// Update
updateItem(item: any): Observable<any> {
  return this.http.put<any>(this.URL +"/"+ item.id, item);
}


// Delete
deleteItem(id:any): Observable<any> {
    return this.http.delete<any>(this.URL + "/" +id);
}

}