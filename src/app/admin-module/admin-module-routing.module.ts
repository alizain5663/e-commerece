import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { ProductsAnalyticsComponent } from './admin-components/products-analytics/products-analytics.component';
import { ProductsComponent } from './admin-components/products/products.component';

import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  {
     path: '', component: AdminModuleComponent,children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'create-products', component:ProductsComponent},
      {path:'products-analytics', component:ProductsAnalyticsComponent}
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
