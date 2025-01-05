import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffModule } from './staff/staff.module';

const routes: Routes = [{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
  path: 'staff',
  loadChildren: () => import('./staff/staff.module').then(m=>StaffModule)
  },
  {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
