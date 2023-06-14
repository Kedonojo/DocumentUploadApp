import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminPendingDocumentsComponent } from './pages/admin-pending-documents/admin-pending-documents.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewDocumentsComponent } from './pages/view-documents/view-documents.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin-pending-documents', component:AdminPendingDocumentsComponent},
  {path:'view-documents', component:ViewDocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
