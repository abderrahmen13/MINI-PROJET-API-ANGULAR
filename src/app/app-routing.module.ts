import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { ProducteurComponent } from './producteur/producteur.component';
import { ConsommateurComponent } from './consommateur/consommateur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'producteur',
    component: ProducteurComponent,
  },
  {
    path: 'consommateur',
    component: ConsommateurComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,],
  exports: [RouterModule],
})
export class AppRoutingModule {}
