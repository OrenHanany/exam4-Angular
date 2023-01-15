// angular CRUd ?
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/deposit.component';
import { LoanComponent } from './loan/loan.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"withdrawal",component:WithdrawalComponent},
  {path:"loan", component:LoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
