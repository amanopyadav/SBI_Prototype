import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRoleComponent } from './client-role/client-role.component';

const routes: Routes = [
  {
    path: '',
    component: ClientRoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
